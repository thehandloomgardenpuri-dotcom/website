import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import CollectionsPan, { type CollectionTile } from "@/components/home/CollectionsPan";
import WeaveStack, { type WeaveCard } from "@/components/home/WeaveStack";
import WhyUs from "@/components/home/WhyUs";
import SareeCarousel3D from "@/components/SareeCarousel3D";
import Marquee from "@/components/motion/Marquee";
import ScrubWords from "@/components/motion/ScrubWords";
import SplitReveal from "@/components/motion/SplitReveal";
import VisitBlock from "@/components/VisitBlock";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { getAllProducts } from "@/lib/products";
import { CATEGORIES } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { GENERAL_FAQS } from "@/data/faqs";
import { CATEGORY_EDITORIAL, WEAVE_EDITORIAL, editorial } from "@/data/editorial";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Handloom Garden Puri | Best Handloom Saree Shop at Swargadwar, Odisha",
  absoluteTitle: true,
  description:
    "Puri's destination for authentic handloom collections. Sambalpuri, Bomkai, Patachitra and Ikat sarees, kurtis and more at our Silk Mark certified A/C showroom, Swargadwar Square, Puri. Open daily 9 AM to 9 PM.",
  path: "/",
});

const WEAVE_NAMES = ["Sambalpuri", "Bomkai", "Patachitra", "Kotpad", "Pasapalli", "Khandua", "Odisha Ikat", "Tussar", "Habaspuri"];

/** Representative image for each weave card on the home stack. */
const WEAVE_IMAGE_IDS: Record<string, string> = {
  "sambalpuri-saree": "PHG-PRM-002",
  "bomkai-saree": "PHG-PRM-017",
  "patachitra-saree": "PHG-SAR-010",
  "odisha-ikat": "PHG-PRM-021",
};

const HOME_FAQS = GENERAL_FAQS.slice(0, 6);

export default async function HomePage() {
  const products = await getAllProducts();
  const premium = products.filter((p) => p.collection === "premium");
  const byId = new Map(products.map((p) => [p.id, p]));

  const heroSlides = ["PHG-PRM-003", "PHG-PRM-014", "PHG-PRM-017", "PHG-PRM-010", "PHG-PRM-021"]
    .map((id) => byId.get(id))
    .filter((p) => p !== undefined);
  const carousel = premium.filter((_, i) => i % 2 === 0).slice(0, 18);

  const tiles: CollectionTile[] = CATEGORIES.map((c) => {
    const inCategory = products.filter((p) => p.category === c.slug);
    const cover = c.slug === "sarees" ? byId.get("PHG-PRM-005") : inCategory[0];
    const mood = CATEGORY_EDITORIAL[c.slug];
    const detail = mood ? editorial(mood) : undefined;
    return {
      slug: c.slug,
      name: c.name,
      line: cover ? `${inCategory.length} pieces online` : "In the showroom now",
      image: cover
        ? { src: cover.image, alt: `${c.name} at Handloom Garden Puri: ${cover.title}`, blur: cover.blur }
        : detail && { src: detail.src, alt: detail.alt, blur: detail.blur },
      pattern: c.slug === "scarves" ? "pasapalli" : "ikat-lattice",
    };
  });

  const weaveCards: WeaveCard[] = WEAVE_GUIDES.map((g) => {
    const img = byId.get(WEAVE_IMAGE_IDS[g.slug] ?? "");
    const mood = WEAVE_EDITORIAL[g.slug];
    const detail = mood ? editorial(mood) : undefined;
    return {
      slug: g.slug,
      name: g.name,
      odia: g.odia,
      definition: g.definition,
      origin: g.origin,
      image: img
        ? { src: img.image, alt: `${img.title}, an example of ${g.name}`, blur: img.blur }
        : detail && { src: detail.src, alt: detail.alt, blur: detail.blur },
      pattern: g.pattern === "check" ? "pasapalli" : "ikat-lattice",
    };
  });

  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQS)} />

      <Hero slides={heroSlides} />

      <div className="border-y border-line py-6">
        <Marquee>
          {WEAVE_NAMES.map((name) => (
            <span key={name} className="flex items-center">
              <span className="px-8 font-display text-3xl italic sm:text-5xl">{name}</span>
              <span aria-hidden className="size-2.5 rotate-45 bg-gold" />
            </span>
          ))}
        </Marquee>
      </div>

      <SareeCarousel3D
        products={carousel}
        scrollDriven
        heading={
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SplitReveal className="display-lg max-w-[14ch]">
              The premium <em>saree collection</em>
            </SplitReveal>
            <p className="max-w-[36ch] text-cream/80">Drag to turn the ring. Tap a saree to bring it forward, tap again to see it up close.</p>
          </div>
        }
      />

      <section aria-label="Our promise" className="mx-auto max-w-[1400px] px-4 py-28 sm:px-6 lg:px-10 lg:py-40">
        <ScrubWords className="display-md max-w-[30ch] !leading-[1.25]">
          Every saree here began as bundles of tied thread on a loom somewhere in Odisha. We bring those looms to Swargadwar, so you can feel the weave, see the colours in daylight, and take a piece of the craft home from Puri.
        </ScrubWords>
        <Link href="/about" className="mt-10 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold text-accent">
          Our story <ArrowRight size={16} strokeWidth={1.75} />
        </Link>
      </section>

      <CollectionsPan tiles={tiles} />

      <WeaveStack cards={weaveCards} />

      <WhyUs />

      <VisitBlock />

      <section aria-labelledby="faq-title" className="mx-auto grid max-w-[1400px] gap-12 px-4 pb-28 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <SplitReveal id="faq-title" className="display-lg">
            Good to <em>know</em>
          </SplitReveal>
          <Link href="/faq" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold text-accent">
            All questions <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={HOME_FAQS} />
        </div>
      </section>
    </>
  );
}
