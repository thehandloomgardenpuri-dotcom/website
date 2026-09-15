import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import SareeCarousel3D from "@/components/SareeCarousel3D";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import BrandIcon from "@/components/BrandIcon";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import Parallax from "@/components/motion/Parallax";
import { WEAVE_GUIDES, getWeaveGuide } from "@/data/weaves";
import { WEAVE_EDITORIAL, editorial } from "@/data/editorial";
import { getAllProducts } from "@/lib/products";
import { articleSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND_IMAGES, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return WEAVE_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/weaves/[slug]">) {
  const { slug } = await params;
  const guide = getWeaveGuide(slug);
  if (!guide) return {};
  const cover = (await getAllProducts()).find((p) => guide.weaves.includes(p.weave));
  return pageMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/weaves/${guide.slug}`,
    type: "article",
    keywords: [guide.name, `${guide.name} Puri`, `buy ${guide.name} in Puri`, `original ${guide.name}`, `${guide.name} GI tag`, "Odisha handloom", "Handloom Garden Puri"],
    image: cover ? { url: cover.image, width: cover.width, height: cover.height, alt: cover.title } : undefined,
  });
}

export default async function WeaveGuidePage({ params }: PageProps<"/weaves/[slug]">) {
  const { slug } = await params;
  const guide = getWeaveGuide(slug);
  if (!guide) notFound();

  const all = await getAllProducts();
  const examples = all.filter((p) => guide.weaves.includes(p.weave));
  const hero = examples.find((p) => p.collection === "premium") ?? examples[0];
  const moodKey = WEAVE_EDITORIAL[guide.slug];
  const mood = moodKey ? editorial(moodKey) : undefined;
  const others = WEAVE_GUIDES.filter((g) => g.slug !== guide.slug);
  const path = `/weaves/${guide.slug}`;
  const plural = guide.name.endsWith("Saree") ? `${guide.name}s` : `${guide.name} pieces`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: guide.seoTitle,
            description: guide.seoDescription,
            path,
            image: hero?.image ?? mood?.src ?? BRAND_IMAGES.showroom,
            about: [guide.name, "Odisha handloom", "Puri"],
          }),
          faqSchema(guide.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Weaves", path: "/weaves" },
          { name: guide.name, path },
        ]}
        watermark={guide.odia.split(" ")[0]}
        title={guide.name}
        intro={guide.definition}
        aside={
          <dl className="grid gap-5 border-l-2 border-gold pl-6 text-sm">
            <div>
              <dt className="font-semibold">In Odia</dt>
              <dd lang="or" className="mt-1 font-odia text-lg text-ink-2">{guide.odia}</dd>
            </div>
            <div>
              <dt className="font-semibold">Geographical Indication</dt>
              <dd className="mt-1 text-ink-2">{guide.giStatus}</dd>
            </div>
          </dl>
        }
      />

      <section aria-labelledby="origin-title" className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-5">
          {hero ? (
            <Parallax className="relative aspect-[3/4] overflow-hidden bg-bg-2" amount={10}>
              <div className="absolute inset-[-8%]">
                <Image src={hero.image} alt={`${hero.title}, an example of ${guide.name}`} fill sizes="(max-width: 1024px) 100vw, 40vw" placeholder={hero.blur ? "blur" : "empty"} blurDataURL={hero.blur ?? undefined} className="object-cover object-top" />
              </div>
            </Parallax>
          ) : mood ? (
            <figure>
              <Parallax className="relative aspect-[3/4] overflow-hidden bg-bg-2" amount={10}>
                <div className="absolute inset-[-8%]">
                  <Image src={mood.src} alt={mood.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" placeholder="blur" blurDataURL={mood.blur} className="object-cover" />
                </div>
              </Parallax>
              <figcaption className="mt-4 max-w-[44ch] text-sm text-ink-2">
                Earthy maroon and white, the palette {guide.name.replace(" Saree", "")} weaving is known for. A detail from our handloom range.
              </figcaption>
            </figure>
          ) : (
            <div className={`aspect-[3/4] ${guide.pattern === "check" ? "pasapalli" : "ikat-lattice"}`} aria-hidden />
          )}
        </div>
        <div className="flex flex-col justify-center gap-12 lg:col-span-6 lg:col-start-7">
          <div>
            <SplitReveal id="origin-title" className="display-md">
              Where it comes from
            </SplitReveal>
            <Reveal className="mt-5 text-lg leading-relaxed text-ink-2">{guide.origin}</Reveal>
          </div>
          <div>
            <SplitReveal className="display-md">How it is made</SplitReveal>
            <Reveal className="mt-5 text-lg leading-relaxed text-ink-2">{guide.technique}</Reveal>
          </div>
          <div>
            <h2 className="font-display text-2xl">Signature motifs</h2>
            <Reveal stagger={0.04} className="mt-5 flex flex-wrap gap-2">
              {guide.motifs.map((m) => (
                <span key={m} className="rounded-full border border-line px-4 py-2 text-sm">{m}</span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="identify-title" className="on-dark bg-maroon-deep text-cream">
        <div className="kumbha text-gold/60" aria-hidden />
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
          <SplitReveal id="identify-title" className="display-lg max-w-[18ch]">
            How to spot a <em>genuine</em> {guide.name.replace(" Saree", "")}
          </SplitReveal>
          <Reveal stagger={0.08} className="mt-12 grid gap-px bg-cream/15 md:grid-cols-2">
            {guide.identify.map((tip, i) => (
              <div key={tip} className="flex gap-5 bg-maroon-deep p-7 lg:p-9">
                <span className="font-display text-4xl italic text-gold-light" aria-hidden>{i + 1}</span>
                <p className="leading-relaxed text-cream/85">{tip}</p>
              </div>
            ))}
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl">When to wear it</h3>
              <p className="mt-3 leading-relaxed text-cream/80">{guide.wear}</p>
            </Reveal>
            <Reveal>
              <h3 className="font-display text-2xl">Caring for it</h3>
              <p className="mt-3 leading-relaxed text-cream/80">{guide.care}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {examples.length >= 8 ? (
        <SareeCarousel3D
          products={examples.slice(0, 16)}
          className="!bg-forest"
          heading={
            <h2 className="display-lg max-w-[18ch]">
              {plural} at <em>Handloom Garden</em>
            </h2>
          }
        />
      ) : examples.length > 0 ? (
        <section aria-labelledby="examples-title" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
          <h2 id="examples-title" className="display-md">
            {plural} at <em>Handloom Garden</em>
          </h2>
          <div className="mt-10">
            <ProductGrid products={examples} filters={false} />
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
          <div className="flex flex-col items-start gap-6 bg-bg-2 p-8 md:flex-row md:items-center md:justify-between lg:p-12">
            <p className="font-display text-2xl md:max-w-[30ch]">{plural} arrive in small batches. Ask what is in the showroom this week.</p>
            <a href={whatsappLink(`Hi Handloom Garden, do you have any ${plural} in the showroom this week?`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
            </a>
          </div>
        </section>
      )}

      <section aria-labelledby="guide-faq" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10">
        <h2 id="guide-faq" className="display-md lg:col-span-4">
          {guide.name}: <em>questions</em>
        </h2>
        <div className="lg:col-span-8">
          <FaqList faqs={guide.faqs} />
        </div>
      </section>

      <nav aria-label="Other weave guides" className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {others.map((g) => (
            <Link key={g.slug} href={`/weaves/${g.slug}`} className="group flex items-center justify-between gap-4 bg-bg px-6 py-8 transition-colors hover:bg-bg-2">
              <span className="font-display text-2xl">{g.name}</span>
              <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
