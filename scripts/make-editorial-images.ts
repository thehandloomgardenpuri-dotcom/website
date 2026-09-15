/**
 * Builds the editorial "fabric detail" images used where the showroom has no product
 * photos yet (Bed Covers, Dress Materials, Jodo & Scarves, Kotpad). Each is a close
 * crop of one of Handloom Garden's own saree photographs, uploaded to the public
 * `site` bucket under editorial/. Writes src/data/editorial-meta.json.
 *
 * Usage: node scripts/make-editorial-images.ts
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { createClient } from "@supabase/supabase-js";

process.loadEnvFile(".env.local");

const premiumDir = path.resolve("../Image generation");
const legacyDir = path.resolve("../website-main/website-main/public");
const premium = fs.readdirSync(premiumDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)).sort();
const P = (n: number) => path.join(premiumDir, premium[n - 1]);

// key → source photo and crop window (fractions of width/height; 3:4 portrait output).
const JOBS: { key: string; source: string; crop: [number, number, number]; from: string }[] = [
  { key: "bed-covers", source: P(18), crop: [0.45, 0.28, 0.5], from: "PHG-PRM-018" },
  { key: "dress-materials", source: P(28), crop: [0.22, 0.45, 0.5], from: "PHG-PRM-028" },
  { key: "jodo-scarves", source: P(5), crop: [0.45, 0.38, 0.45], from: "PHG-PRM-005" },
  { key: "kotpad-texture", source: path.join(legacyDir, "Model_Shots/img_0175_model4_1785076250441.webp"), crop: [0.3, 0.4, 0.55], from: "PHG-SAR-070" },
  { key: "loom-detail", source: P(31), crop: [0.42, 0.38, 0.5], from: "PHG-PRM-031" },
  { key: "sambalpuri-detail", source: P(3), crop: [0.42, 0.5, 0.45], from: "PHG-PRM-003" },
];

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SECRET_KEY!, {
  auth: { persistSession: false },
});

const meta: Record<string, { path: string; width: number; height: number; blur: string; from: string }> = {};

for (const job of JOBS) {
  const img = sharp(job.source);
  const { width = 0, height = 0 } = await img.metadata();
  const [l, t, w] = job.crop;
  const cw = Math.round(w * width);
  const ch = Math.min(Math.round((cw * 4) / 3), height - Math.round(t * height));
  const region = { left: Math.round(l * width), top: Math.round(t * height), width: cw, height: ch };
  const buffer = await sharp(job.source)
    .extract(region)
    .resize({ width: 900, kernel: "lanczos3" })
    .sharpen({ sigma: 0.8 })
    .webp({ quality: 86 })
    .toBuffer();
  const out = await sharp(buffer).metadata();
  const tiny = await sharp(buffer).resize(12).webp({ quality: 40 }).toBuffer();
  const dest = `editorial/${job.key}.webp`;
  const { error } = await supabase.storage.from("site").upload(dest, buffer, { contentType: "image/webp", cacheControl: "2592000", upsert: true });
  if (error) throw new Error(`${dest}: ${error.message}`);
  meta[job.key] = { path: dest, width: out.width ?? 900, height: out.height ?? 1200, blur: `data:image/webp;base64,${tiny.toString("base64")}`, from: job.from };
  console.log(`uploaded ${dest} (${out.width}x${out.height}) from ${job.from}`);
}

fs.writeFileSync("src/data/editorial-meta.json", JSON.stringify(meta, null, 2) + "\n");
