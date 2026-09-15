import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import SareeCarousel3D from "@/components/SareeCarousel3D";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/JsonLd";
import BrandIcon from "@/components/BrandIcon";
import FaqList from "@/components/FaqList";
import { getAllProducts } from "@/lib/products";
import { CATEGORIES, getCategory } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { GENERAL_FAQS } from "@/data/faqs";
import { CATEGORY_EDITORIAL, editorial } from "@/data/editorial";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND_IMAGES, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[category]">) {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) return {};
  const cover = (await getAllProducts()).find((p) => p.category === info.slug);
  const moodKey = CATEGORY_EDITORIAL[info.slug];
  const mood = moodKey ? editorial(moodKey) : undefined;
  return pageMetadata({
    title: info.seoTitle,
    description: info.seoDescription,
    path: `/collections/${info.slug}`,
    keywords: [...info.keywords, "Handloom Garden Puri", "Swargadwar Puri", "Odisha handloom"],
    image: cover
      ? { url: cover.image, width: cover.width, height: cover.height, alt: cover.title }
      : mood && { url: mood.src, width: mood.width, height: mood.height, alt: mood.alt },
  });
}

const CATEGORY_FAQS = [GENERAL_FAQS[2], GENERAL_FAQS[6], GENERAL_FAQS[9]];

export default async function CategoryPage({ params }: PageProps<"/collections/[category]">) {
  const { category } = await params;
  const info = getCategory(category);
  if (!info) notFound();

  const all = await getAllProducts();
  const products = all.filter((p) => p.category === info.slug);
  const premium = products.filter((p) => p.collection === "premium");
  const suggestions = all.filter((p) => p.category !== info.slug).slice(0, 4);
  const moodKey = CATEGORY_EDITORIAL[info.slug];
  const detail = moodKey ? editorial(moodKey) : undefined;

  return (
    <>
      <JsonLd data={[itemListSchema(`${info.name} at Handloom Garden Puri`, products), faqSchema(CATEGORY_FAQS)]} />
      <PageHero
        crumbs={[
          { name: "Collections", path: "/collections" },
          { name: info.name, path: `/collections/${info.slug}` },
        ]}
        title={info.h1}
        intro={info.intro}
        watermark={info.slug === "sarees" ? "ଶାଢ଼ୀ" : undefined}
        aside={
          products.length ? (
            <p className="flex items-center gap-4 text-sm text-ink-2">
              <span className="font-display text-5xl leading-none text-ink">{products.length}</span>
              <span className="max-w-[22ch]">pieces photographed, many more in the showroom</span>
            </p>
          ) : undefined
        }
      />

      {premium.length > 5 && (
        <SareeCarousel3D
          products={premium.slice(0, 16)}
          heading={
            <SplitReveal className="display-lg max-w-[16ch]">
              The premium <em>collection</em>
            </SplitReveal>
          }
        />
      )}

      {products.length > 0 ? (
        <section aria-label={`${info.name} catalogue`} className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <ProductGrid products={products} filters={info.slug === "sarees"} />
        </section>
      ) : (
        <section aria-label={`${info.name} in the showroom`} className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <Reveal as="figure" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-bg-2">
              {detail ? (
                <Image src={detail.src} alt={detail.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" blurDataURL={detail.blur} className="object-cover" />
              ) : (
                <Image src={BRAND_IMAGES.showroom} alt={`${info.name} are stocked at Handloom Garden's showroom, Swargadwar, Puri`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
              )}
            </div>
            {detail && (
              <div className="absolute -bottom-6 right-4 w-[34%] border-[6px] border-bg shadow-[0_24px_50px_-20px_rgb(28_26_23/0.5)] sm:right-6">
                <div className="relative aspect-[3/4]">
                  <Image src={BRAND_IMAGES.showroom} alt="Handloom Garden showroom at Swargadwar Square, Puri" fill sizes="200px" className="object-cover object-top" />
                </div>
              </div>
            )}
            <figcaption className="mt-10 max-w-[40ch] text-sm text-ink-2">
              A handloom weave detail from our showroom range. Ask us for photos of today&apos;s {info.name.toLowerCase()}.
            </figcaption>
          </Reveal>
          <div className="flex flex-col justify-center">
            <SplitReveal className="display-md">
              See today&apos;s <em>{info.name.toLowerCase()}</em> on WhatsApp
            </SplitReveal>
            <Reveal className="mt-6 max-w-[48ch] text-lg text-ink-2">{info.inStoreNote}</Reveal>
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(`Hi Handloom Garden, could you share photos of the ${info.name.toLowerCase()} available in the showroom today?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
              </a>
              <Link href="/contact" className="btn btn-ghost text-ink">
                Visit the showroom
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {info.slug === "sarees" && (
        <section aria-labelledby="weave-guides" className="border-t border-line bg-bg-2">
          <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
            <SplitReveal id="weave-guides" className="display-md">
              Know your <em>weave</em>
            </SplitReveal>
            <Reveal stagger={0.06} className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
              {WEAVE_GUIDES.map((g) => (
                <Link key={g.slug} href={`/weaves/${g.slug}`} className="group flex min-h-[180px] flex-col justify-between bg-bg-2 p-6 transition-colors hover:bg-bg">
                  <span lang="or" className="font-odia text-sm text-gold-ink">{g.odia}</span>
                  <span className="flex items-end justify-between gap-3">
                    <span className="font-display text-2xl leading-tight">{g.name}</span>
                    <ArrowRight size={18} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {products.length === 0 && suggestions.length > 0 && (
        <section aria-labelledby="also-title" className="mx-auto max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-10">
          <h2 id="also-title" className="display-md">While you&apos;re here</h2>
          <div className="mt-10">
            <ProductGrid products={suggestions} filters={false} />
          </div>
        </section>
      )}

      <section aria-labelledby="cat-faq" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10">
        <h2 id="cat-faq" className="display-md lg:col-span-4">
          Before you <em>visit</em>
        </h2>
        <div className="lg:col-span-8">
          <FaqList faqs={CATEGORY_FAQS} />
        </div>
      </section>
    </>
  );
}
