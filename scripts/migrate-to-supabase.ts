/**
 * One-off (re-runnable) migration: uploads every catalogue + brand image to the
 * public `site` bucket in Supabase Storage, applies the SQL migration, and upserts
 * the product rows. Also writes src/data/image-meta.json (dimensions + blur
 * placeholders) so the site can render without a round-trip for layout.
 *
 * Usage:  node scripts/migrate-to-supabase.ts [legacy/public dir] [premium images dir]
 * Needs:  .env.local with NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SECRET_KEY, DIRECT_URL
 *
 * Premium images are matched by alphabetical file order: PHG-PRM-001 is the
 * first file in the premium folder, PHG-PRM-002 the second, and so on.
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";
import pg from "pg";
import { catalog, LEGACY_SOURCE, BRAND_ASSETS, productSlug, storagePath } from "../src/data/catalog.ts";

process.loadEnvFile(".env.local");

const BUCKET = "site";
// Original assets live outside the repo now that images are served from Supabase.
const SOURCE_DIR = path.resolve(process.argv[2] ?? "../website-main/website-main/public");
const PREMIUM_DIR = path.resolve(process.argv[3] ?? "../Image generation");
const url = required("NEXT_PUBLIC_SUPABASE_URL");
const supabase = createClient(url, required("SUPABASE_SECRET_KEY"), {
  auth: { persistSession: false, autoRefreshToken: false },
});

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name} in .env.local`);
  return value;
}

async function ensureBucket() {
  const { data } = await supabase.storage.getBucket(BUCKET);
  if (data) return;
  const { error } = await supabase.storage.createBucket(BUCKET, {
    public: true,
    fileSizeLimit: "5MB",
    allowedMimeTypes: ["image/webp", "image/png", "image/jpeg", "image/avif"],
  });
  if (error) throw error;
  console.log(`Created public bucket "${BUCKET}"`);
}

interface ImageMeta { width: number; height: number; blur: string }

async function uploadImage(sourcePath: string, destination: string): Promise<ImageMeta> {
  let buffer = fs.readFileSync(sourcePath);
  const original = await sharp(buffer).metadata();
  // Normalise everything to web-friendly WebP no wider than 1400px.
  if (original.format !== "webp" || (original.width ?? 0) > 1400) {
    buffer = await sharp(buffer).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 84 }).toBuffer();
  }
  const { width = 0, height = 0 } = await sharp(buffer).metadata();
  const tiny = await sharp(buffer).resize(12).webp({ quality: 40 }).toBuffer();

  const { error } = await supabase.storage.from(BUCKET).upload(destination, buffer, {
    contentType: "image/webp",
    cacheControl: "2592000",
    upsert: true,
  });
  if (error) throw new Error(`${destination}: ${error.message}`);
  return { width, height, blur: `data:image/webp;base64,${tiny.toString("base64")}` };
}

async function uploadOgAssets(sareeSource: string, logoSource: string) {
  const jobs = [
    { dest: "og/og-saree.jpg", type: "image/jpeg", data: await sharp(sareeSource).resize({ width: 800 }).jpeg({ quality: 82 }).toBuffer() },
    { dest: "og/og-logo.png", type: "image/png", data: await sharp(logoSource).resize({ width: 600 }).png().toBuffer() },
  ];
  for (const job of jobs) {
    const { error } = await supabase.storage.from(BUCKET).upload(job.dest, job.data, { contentType: job.type, upsert: true, cacheControl: "2592000" });
    if (error) throw new Error(`${job.dest}: ${error.message}`);
  }
  console.log("Uploaded Open Graph assets");
}

async function main() {
  await ensureBucket();

  const premiumFiles = fs.readdirSync(PREMIUM_DIR).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();

  const sourceFor = (id: string): string => {
    const premium = id.match(/^PHG-PRM-(\d+)$/);
    if (premium) {
      const file = premiumFiles[Number(premium[1]) - 1];
      if (!file) throw new Error(`No premium image for ${id}`);
      return path.join(PREMIUM_DIR, file);
    }
    const legacy = LEGACY_SOURCE[id];
    if (!legacy) throw new Error(`No source image for ${id}`);
    return path.join(SOURCE_DIR, legacy);
  };

  const meta: Record<string, ImageMeta> = {};
  for (const item of catalog) {
    meta[item.id] = await uploadImage(sourceFor(item.id), storagePath(item));
    process.stdout.write(".");
  }
  for (const asset of BRAND_ASSETS) {
    meta[asset.path] = await uploadImage(path.join(SOURCE_DIR, asset.source), asset.path);
    process.stdout.write("+");
  }
  console.log(`\nUploaded ${catalog.length} product + ${BRAND_ASSETS.length} brand images`);

  // Social-card assets: the Open Graph renderer needs JPEG/PNG rather than WebP.
  await uploadOgAssets(sourceFor("PHG-PRM-014"), path.join(SOURCE_DIR, "images/logo_large.webp"));

  fs.writeFileSync("src/data/image-meta.json", JSON.stringify(meta, null, 2) + "\n");

  const db = new pg.Client({ connectionString: required("DIRECT_URL"), ssl: { rejectUnauthorized: false } });
  await db.connect();
  try {
    const migration = fs.readFileSync("supabase/migrations/20260915000000_catalog_and_enquiries.sql", "utf8");
    await db.query(migration);

    await db.query("begin");
    for (const [index, item] of catalog.entries()) {
      const m = meta[item.id];
      await db.query(
        `insert into public.products
           (id, slug, title, category, weave, description, image_path, image_width, image_height, blur_data_url, featured, collection, sort_order, updated_at)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13, now())
         on conflict (id) do update set
           slug = excluded.slug, title = excluded.title, category = excluded.category, weave = excluded.weave,
           description = excluded.description, image_path = excluded.image_path, image_width = excluded.image_width,
           image_height = excluded.image_height, blur_data_url = excluded.blur_data_url, featured = excluded.featured,
           collection = excluded.collection, sort_order = excluded.sort_order, updated_at = now()`,
        [item.id, productSlug(item), item.title, item.category, item.weave, item.description,
         storagePath(item), m.width, m.height, m.blur, item.featured ?? false, item.collection ?? null, index],
      );
    }
    await db.query("commit");
    const { rows } = await db.query("select count(*)::int as n from public.products");
    console.log(`products table: ${rows[0].n} rows`);
  } finally {
    await db.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
