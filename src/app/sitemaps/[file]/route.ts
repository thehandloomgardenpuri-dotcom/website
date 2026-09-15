import { notFound } from "next/navigation";
import { buildChild, CHILD_SITEMAPS, urlset, xmlResponse, type ChildSitemap } from "@/lib/sitemap";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return CHILD_SITEMAPS.map((file) => ({ file }));
}

export async function GET(_request: Request, { params }: RouteContext<"/sitemaps/[file]">) {
  const { file } = await params;
  if (!CHILD_SITEMAPS.includes(file as ChildSitemap)) notFound();
  return xmlResponse(urlset(await buildChild(file as ChildSitemap)));
}
