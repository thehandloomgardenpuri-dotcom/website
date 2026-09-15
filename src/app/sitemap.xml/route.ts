import { allEntries, urlset, xmlResponse } from "@/lib/sitemap";

export const revalidate = 3600;

/** Flat sitemap: every page, guide, saree, kurti and frock, with images and last-edited dates. */
export async function GET() {
  return xmlResponse(urlset(await allEntries()));
}
