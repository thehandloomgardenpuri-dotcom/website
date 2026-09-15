import { sitemapIndex, xmlResponse } from "@/lib/sitemap";

export const revalidate = 3600;

/** Sitemap index: points search engines at the per-type sitemaps under /sitemaps/. */
export async function GET() {
  return xmlResponse(await sitemapIndex());
}
