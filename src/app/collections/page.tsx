import Image from "next/image";
import Link from "next/link";
import { CATEGORY_EDITORIAL, editorial } from "@/data/editorial";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CollectionExplorer from "@/components/CollectionExplorer";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import { getAllProducts } from "@/lib/products";
import { CATEGORIES } from "@/data/taxonomy";
import { itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "All Handloom Collections in Puri: Sarees, Kurtis, Frocks & More",
  description:
    "Browse every handloom piece at Handloom Garden, Swargadwar, Puri: Sambalpuri, Bomkai, Patachitra and Ikat sarees, ikat kurtis and anarkali frocks. Filter by weave and ask for prices on WhatsApp.",
  path: "/collections",
});

export default async function CollectionsPage() {
  const all = await getAllProducts();
  const initial = all.slice(0, 12);

  return (
    <>
      <JsonLd data={itemListSchema("Handloom Garden collections", all)} />
      <PageHero
        crumbs={[{ name: "Collections", path: "/collections" }]}
        watermark="ଶାଢ଼ୀ"
        title={
          <>
            Every piece, <em>one place</em>
          </>
        }
        intro={`${all.length} handloom sarees, kurtis and frocks from Handloom Garden's showroom at Swargadwar, Puri. Filter by collection or weave style, and message us on WhatsApp with any product code for price and availability.`}
      />

      <section aria-label="In-store collections" className="mx-auto max-w-[1400px] px-4 pt-12 sm:px-6 lg:px-10">
        <Reveal stagger={0.06} className="grid gap-3 sm:grid-cols-3">
          {CATEGORIES.filter((c) => c.inStoreOnly).map((c) => {
            const key = CATEGORY_EDITORIAL[c.slug];
            const img = key ? editorial(key) : undefined;
            return (
              <Link key={c.slug} href={`/collections/${c.slug}`} className="group flex items-center gap-4 border border-line p-3 pr-5 transition-colors hover:border-maroon">
                {img && (
                  <span className="relative size-20 shrink-0 overflow-hidden bg-bg-2">
                    <Image src={img.src} alt="" fill sizes="80px" placeholder="blur" blurDataURL={img.blur} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </span>
                )}
                <span className="flex-1">
                  <span className="block font-display text-xl">{c.name}</span>
                  <span className="text-sm text-ink-2">In the showroom now</span>
                </span>
                <ArrowUpRight size={18} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:rotate-45" />
              </Link>
            );
          })}
        </Reveal>
      </section>

      <section aria-label="Product catalogue" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <CollectionExplorer initial={initial} initialTotal={all.length} fixtureProduct={all[0]} />
      </section>
    </>
  );
}
