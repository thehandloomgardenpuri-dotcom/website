/** Client-safe product shape + helpers (no data, no server clients). */
import { WEAVE_LABEL, type Category, type Weave } from "@/data/taxonomy";
import { SITE_URL, storageUrl } from "./site";

export interface Product {
  id: string;
  slug: string;
  title: string;
  category: Category;
  weave: Weave;
  weaveLabel: string;
  description: string;
  image: string;
  width: number;
  height: number;
  blur: string | null;
  featured: boolean;
  collection: string | null;
  /** Last edit in Supabase (drives sitemap <lastmod>); null for the local fallback catalogue. */
  updatedAt: string | null;
}

export interface ProductRow {
  id: string;
  slug: string;
  title: string;
  category: Category;
  weave: Weave;
  description: string;
  image_path: string;
  image_width: number;
  image_height: number;
  blur_data_url: string | null;
  featured: boolean;
  collection: string | null;
  updated_at?: string | null;
}

export const PRODUCT_COLUMNS =
  "id, slug, title, category, weave, description, image_path, image_width, image_height, blur_data_url, featured, collection, updated_at";

export function fromRow(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category,
    weave: row.weave,
    weaveLabel: WEAVE_LABEL[row.weave] ?? row.weave,
    description: row.description,
    image: storageUrl(row.image_path),
    width: row.image_width,
    height: row.image_height,
    blur: row.blur_data_url,
    featured: row.featured,
    collection: row.collection,
    updatedAt: row.updated_at ?? null,
  };
}

export function productPath(p: Pick<Product, "category" | "slug">): string {
  return `/collections/${p.category}/${p.slug}`;
}

/** WhatsApp message with the product page link, so the chat shows a rich preview. */
export function productEnquiry(p: Pick<Product, "title" | "id" | "category" | "slug">): string {
  return `Hi Handloom Garden, I'm interested in the ${p.title} (code ${p.id}).\n\n${SITE_URL}${productPath(p)}\n\nPlease share the price, fabric and availability.`;
}
