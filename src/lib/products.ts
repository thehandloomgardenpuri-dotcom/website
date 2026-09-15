import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
import { catalog, productSlug, storagePath } from "@/data/catalog";
import { WEAVE_LABEL, type Category, type Weave } from "@/data/taxonomy";
import imageMeta from "@/data/image-meta.json";
import { SUPABASE_PUBLISHABLE_KEY, SUPABASE_URL, storageUrl } from "./site";
import { fromRow, PRODUCT_COLUMNS, type Product, type ProductRow } from "./product-shape";

export * from "./product-shape";

/** Local catalogue mirror, used if Supabase is unreachable at build time. */
function fallbackProducts(): Product[] {
  const meta = imageMeta as Record<string, { width: number; height: number; blur: string }>;
  return catalog.map((item) => {
    const m = meta[item.id];
    return {
      id: item.id,
      slug: productSlug(item),
      title: item.title,
      category: item.category,
      weave: item.weave,
      weaveLabel: WEAVE_LABEL[item.weave],
      description: item.description,
      image: storageUrl(storagePath(item)),
      width: m?.width ?? 800,
      height: m?.height ?? 1200,
      blur: m?.blur ?? null,
      featured: item.featured ?? false,
      collection: item.collection ?? null,
      updatedAt: null,
    };
  });
}

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: {
    // Catalogue reads are cached and revalidated hourly (ISR) so pages stay static.
    fetch: (input, init) => fetch(input, { ...init, next: { revalidate: 3600, tags: ["products"] } }),
  },
});

export const getAllProducts = cache(async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from("products")
    .select(PRODUCT_COLUMNS)
    .order("sort_order", { ascending: true });
  if (error || !data?.length) {
    if (error) console.warn("[products] Supabase unavailable, using local catalogue:", error.message);
    return fallbackProducts();
  }
  return (data as ProductRow[]).map(fromRow);
});

export async function getProductsByCategory(category: Category): Promise<Product[]> {
  return (await getAllProducts()).filter((p) => p.category === category);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return (await getAllProducts()).find((p) => p.slug === slug);
}

export async function getPremiumProducts(): Promise<Product[]> {
  return (await getAllProducts()).filter((p) => p.collection === "premium");
}

export async function getProductsByWeave(weaves: Weave[]): Promise<Product[]> {
  return (await getAllProducts()).filter((p) => weaves.includes(p.weave));
}

export function getRelatedProducts(all: Product[], product: Product, limit = 8): Product[] {
  const sameWeave = all.filter((p) => p.id !== product.id && p.weave === product.weave);
  const sameCategory = all.filter((p) => p.id !== product.id && p.category === product.category && p.weave !== product.weave);
  return [...sameWeave, ...sameCategory].slice(0, limit);
}
