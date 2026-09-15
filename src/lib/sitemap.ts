import { getAllProducts, productPath, type Product } from "./products";
import { CATEGORIES } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { BRAND_IMAGES, SITE_URL } from "./site";

/**
 * One flat sitemap listing every URL on the site (pages, guides, every saree,
 * kurtis and frocks), with product images and real last-edited dates.
 */

interface Entry {
  path: string;
  lastmod?: string | null;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: number;
  images?: string[];
}

const GROUPS = ["pages", "guides", "sarees", "kurtis-and-frocks"] as const;
type Group = (typeof GROUPS)[number];

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const day = (d?: string | null) => (d ? new Date(d) : new Date()).toISOString();

export function xmlResponse(body: string) {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${body}`, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}

export function urlset(entries: Entry[]) {
  const urls = entries
    .map((e) => {
      const images = (e.images ?? []).map((src) => `\n    <image:image><image:loc>${esc(src)}</image:loc></image:image>`).join("");
      return `  <url>\n    <loc>${esc(`${SITE_URL}${e.path}`)}</loc>\n    <lastmod>${day(e.lastmod)}</lastmod>${
        e.changefreq ? `\n    <changefreq>${e.changefreq}</changefreq>` : ""
      }${e.priority !== undefined ? `\n    <priority>${e.priority.toFixed(1)}</priority>` : ""}${images}\n  </url>`;
    })
    .join("\n");
  return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
}

const newest = (products: Product[]) =>
  products.reduce<string | null>((max, p) => (p.updatedAt && (!max || p.updatedAt > max) ? p.updatedAt : max), null);

const productEntry = (p: Product): Entry => ({
  path: productPath(p),
  lastmod: p.updatedAt,
  changefreq: "monthly",
  priority: p.collection === "premium" ? 0.8 : 0.7,
  images: [p.image],
});

async function buildGroup(name: Group, products: Product[]): Promise<Entry[]> {
  const latest = newest(products);

  switch (name) {
    case "pages":
      return [
        { path: "/", lastmod: latest, changefreq: "weekly", priority: 1, images: [BRAND_IMAGES.showroom] },
        { path: "/collections", lastmod: latest, changefreq: "weekly", priority: 0.9 },
        ...CATEGORIES.map((c) => {
          const inCat = products.filter((p) => p.category === c.slug);
          return {
            path: `/collections/${c.slug}`,
            lastmod: newest(inCat) ?? latest,
            changefreq: "weekly" as const,
            priority: c.slug === "sarees" ? 0.9 : 0.8,
            images: inCat.slice(0, 1).map((p) => p.image),
          };
        }),
        { path: "/contact", changefreq: "monthly", priority: 0.9, images: [BRAND_IMAGES.showroom] },
        { path: "/about", changefreq: "monthly", priority: 0.7, images: [BRAND_IMAGES.showroom] },
        { path: "/faq", changefreq: "monthly", priority: 0.7 },
        { path: "/site-map", changefreq: "weekly", priority: 0.4 },
      ];
    case "sarees":
      return products.filter((p) => p.category === "sarees").map(productEntry);
    case "kurtis-and-frocks":
      return products.filter((p) => p.category !== "sarees").map(productEntry);
    case "guides":
      return [
        { path: "/weaves", changefreq: "monthly", priority: 0.8 },
        ...WEAVE_GUIDES.map((g) => {
          const hero = products.find((p) => g.weaves.includes(p.weave));
          return { path: `/weaves/${g.slug}`, changefreq: "monthly" as const, priority: 0.8, images: hero ? [hero.image] : [] };
        }),
        { path: "/puri-saree-shopping-guide", changefreq: "monthly", priority: 0.8 },
      ];
  }
}

/** Every URL on the site, in one list. */
export async function allEntries(): Promise<Entry[]> {
  const products = await getAllProducts();
  const groups = await Promise.all(GROUPS.map((g) => buildGroup(g, products)));
  return groups.flat();
}
