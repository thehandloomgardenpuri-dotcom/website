import PageHero from "@/components/PageHero";
import WeaveIndexList from "@/components/WeaveIndexList";
import JsonLd from "@/components/JsonLd";
import { WEAVE_GUIDES } from "@/data/weaves";
import { WEAVE_EDITORIAL, editorial } from "@/data/editorial";
import { getAllProducts } from "@/lib/products";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Odisha Handloom Weaves Explained: Sambalpuri, Bomkai, Patachitra, Kotpad & Ikat",
  description:
    "Plain-language guides to Odisha's handloom sarees: what Sambalpuri, Bomkai, Patachitra, Kotpad and Ikat are, where they come from, how to identify an original, and where to buy them in Puri.",
  path: "/weaves",
});

const SUMMARY: Record<string, string> = {
  "sambalpuri-saree": "Tie-dyed Bandha ikat from western Odisha, with motifs dyed into the yarn before weaving.",
  "bomkai-saree": "Extra-weft temple borders and pallus, first woven in Bomkai village, Ganjam.",
  "patachitra-saree": "The scroll-painting art of Raghurajpur, near Puri, carried onto sarees.",
  "kotpad-saree": "Aal-root dyed tribal weave of Koraput, and Odisha's first GI-tagged handloom.",
  "odisha-ikat": "Bandha across Odisha: Khandua, Pasapalli, Habaspuri and more, single and double ikat.",
};

const IMAGE_FOR: Record<string, string> = {
  "sambalpuri-saree": "PHG-PRM-002",
  "bomkai-saree": "PHG-PRM-017",
  "patachitra-saree": "PHG-SAR-010",
  "odisha-ikat": "PHG-PRM-021",
};

export default async function WeavesPage() {
  const products = await getAllProducts();
  const byId = new Map(products.map((p) => [p.id, p]));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Odisha handloom weave guides",
          url: `${SITE_URL}/weaves`,
          hasPart: WEAVE_GUIDES.map((g) => ({ "@type": "Article", headline: g.name, url: `${SITE_URL}/weaves/${g.slug}` })),
        }}
      />
      <PageHero
        crumbs={[{ name: "Weaves", path: "/weaves" }]}
        watermark="ବୁଣା"
        title={
          <>
            The weaves of <em>Odisha</em>
          </>
        }
        intro="Odisha has one of India's richest handloom traditions, with several weaves protected as Geographical Indications. These guides explain each style in plain language, so you know exactly what you are choosing when you shop in Puri."
      />
      <section aria-label="Weave guides" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <WeaveIndexList
          rows={WEAVE_GUIDES.map((g) => ({
            slug: g.slug,
            name: g.name,
            odia: g.odia,
            definition: SUMMARY[g.slug] ?? g.definition,
            image: byId.get(IMAGE_FOR[g.slug] ?? "")?.image ?? (WEAVE_EDITORIAL[g.slug] ? editorial(WEAVE_EDITORIAL[g.slug]!).src : undefined),
          }))}
        />
      </section>
    </>
  );
}
