import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ZoomImage from "@/components/ZoomImage";
import SareeCarousel3D from "@/components/SareeCarousel3D";
import ProductGrid from "@/components/ProductGrid";
import SplitReveal from "@/components/motion/SplitReveal";
import Reveal from "@/components/motion/Reveal";
import JsonLd from "@/components/JsonLd";
import BrandIcon from "@/components/BrandIcon";
import { getAllProducts, getRelatedProducts, productEnquiry } from "@/lib/products";
import { getCategory, WEAVE_GUIDE } from "@/data/taxonomy";
import { getWeaveGuide } from "@/data/weaves";
import { productSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { FULL_ADDRESS, MAPS, whatsappLink } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

async function load(category: string, slug: string) {
  const all = await getAllProducts();
  const product = all.find((p) => p.slug === slug && p.category === category);
  return { all, product };
}

export async function generateMetadata({ params }: PageProps<"/collections/[category]/[slug]">) {
  const { category, slug } = await params;
  const { product } = await load(category, slug);
  if (!product) return {};
  const cat = getCategory(product.category);
  const noun = product.category === "sarees" ? "Saree" : cat?.name.replace(/s$/, "") ?? "Handloom";
  return pageMetadata({
    title: `${product.title} | ${product.weaveLabel} ${noun} in Puri`,
    description: `${product.description} See it at Handloom Garden, Swargadwar Square, Puri, or ask for the price on WhatsApp (code ${product.id}).`,
    path: `/collections/${product.category}/${product.slug}`,
    keywords: [product.title, `${product.weaveLabel} ${noun.toLowerCase()}`, `${product.weaveLabel} saree Puri`, "handloom saree shop Puri", "Handloom Garden Puri", "Swargadwar"],
    image: { url: product.image, width: product.width, height: product.height, alt: product.title },
  });
}

export default async function ProductPage({ params }: PageProps<"/collections/[category]/[slug]">) {
  const { category, slug } = await params;
  const { all, product } = await load(category, slug);
  if (!product) notFound();

  const cat = getCategory(product.category)!;
  const guideSlug = WEAVE_GUIDE[product.weave];
  const guide = guideSlug ? getWeaveGuide(guideSlug) : undefined;
  const related = getRelatedProducts(all, product, 12);

  return (
    <>
      <JsonLd data={productSchema(product, cat.name)} />
      <article className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32">
        <Breadcrumbs
          items={[
            { name: "Collections", path: "/collections" },
            { name: cat.name, path: `/collections/${cat.slug}` },
            { name: product.title, path: `/collections/${cat.slug}/${product.slug}` },
          ]}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <ZoomImage
                src={product.image}
                alt={`${product.title}, ${product.weaveLabel.toLowerCase()} ${cat.name.toLowerCase()} at Handloom Garden, Swargadwar, Puri`}
                blur={product.blur}
                width={product.width}
                height={product.height}
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-6">
            <p className="text-sm font-semibold text-gold-ink">
              {product.weaveLabel}
              <span className="ml-3 font-normal tabular-nums text-ink-2">Code {product.id}</span>
            </p>
            <SplitReveal as="h1" trigger="intro" className="display-lg mt-4">
              {product.title}
            </SplitReveal>
            <Reveal className="mt-6 text-lg leading-relaxed text-ink-2">{product.description}</Reveal>

            <Reveal className="mt-9 flex flex-wrap gap-3">
              <a href={whatsappLink(productEnquiry(product))} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
              </a>
              <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-ink">
                Get directions
              </a>
            </Reveal>

            <Reveal stagger={0.06} className="mt-10 grid gap-5 border-t border-line pt-8 text-sm">
              <p className="flex gap-3">
                <MessageCircle size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
                <span>Price, fabric and current availability are shared on WhatsApp. Quote code <strong className="font-semibold">{product.id}</strong>.</span>
              </p>
              <p className="flex gap-3">
                <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
                <span>See it in person at {FULL_ADDRESS}.</span>
              </p>
              <p className="flex gap-3">
                <ShieldCheck size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" />
                <span>Handloom Garden is a Silk Mark certified store. Ask to see the Silk Mark label on any silk piece.</span>
              </p>
            </Reveal>

            {guide && (
              <Reveal className="mt-10 bg-bg-2 p-7">
                <h2 className="font-display text-2xl">About {guide.name.replace(" Saree", "")} weaving</h2>
                <p className="mt-3 leading-relaxed text-ink-2">{guide.definition}</p>
                <ul className="mt-5 grid gap-2 text-sm text-ink-2">
                  {guide.identify.slice(0, 2).map((tip) => (
                    <li key={tip} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <Link href={`/weaves/${guide.slug}`} className="mt-6 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-semibold text-accent">
                  Read the {guide.name} guide <ArrowRight size={16} strokeWidth={1.75} />
                </Link>
              </Reveal>
            )}
          </div>
        </div>
      </article>

      {related.length >= 8 && product.category === "sarees" ? (
        <SareeCarousel3D
          products={related}
          heading={
            <h2 className="display-lg max-w-[16ch]">
              You may also <em>love</em>
            </h2>
          }
        />
      ) : (
        related.length > 0 && (
          <section aria-labelledby="related-title" className="mx-auto max-w-[1400px] border-t border-line px-4 py-20 sm:px-6 lg:px-10">
            <h2 id="related-title" className="display-md">
              You may also <em>love</em>
            </h2>
            <div className="mt-10">
              <ProductGrid products={related.slice(0, 8)} filters={false} />
            </div>
          </section>
        )
      )}
    </>
  );
}
