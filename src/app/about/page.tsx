import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import ScrubWords from "@/components/motion/ScrubWords";
import Parallax from "@/components/motion/Parallax";
import { getAllProducts } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";
import { STORE_ID } from "@/lib/schema";
import { BRAND_IMAGES, SITE, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Story | A Trusted Handloom Showroom in Puri Since 1978",
  description:
    "Handloom Garden is a trusted handloom showroom at Swargadwar, Puri, showcasing authentic Odisha sarees and ethnic wear from skilled artisans. Silk Mark certified, A/C mega showroom, ground floor.",
  path: "/about",
  keywords: ["Handloom Garden Puri story", "trusted handloom showroom Puri", "Odisha weavers", "support handloom artisans", "Silk Mark certified store Puri"],
});

const PROMISES = [
  { title: "Authentic handloom", body: "Carefully selected handwoven fabrics and ethnic wear, crafted by skilled artisans using traditional techniques." },
  { title: "Wide variety", body: "From elegant sarees and dress materials to traditional and contemporary outfits for every occasion." },
  { title: "Quality you can trust", body: "Premium fabrics, fine craftsmanship and lasting durability in every piece, with Silk Mark assurance on silk." },
  { title: "Supporting artisans", body: "Every purchase helps preserve traditional weaving techniques and supports Odisha's weaving communities." },
];

const VISITORS = [
  { title: "Women of every age", body: "Who love ethnic and handloom wear, for daily life and for celebrations." },
  { title: "Gift buyers", body: "Looking for premium traditional textiles that carry meaning." },
  { title: "Visitors to Puri", body: "Pilgrims and travellers who want authentic local handloom to take home." },
  { title: "Conscious shoppers", body: "Who prefer sustainable, artisan-made textiles over mass production." },
];

export default async function AboutPage() {
  const products = await getAllProducts();
  const feature = products.find((p) => p.id === "PHG-PRM-001") ?? products[0];
  const second = products.find((p) => p.id === "PHG-SAR-001") ?? products[1];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", url: `${SITE_URL}/about`, name: "About Handloom Garden", about: { "@id": STORE_ID } }} />
      <PageHero
        crumbs={[{ name: "Our Story", path: "/about" }]}
        watermark="ବଗିଚା"
        title={
          <>
            A garden of handloom, <em>at Swargadwar</em>
          </>
        }
        intro="Handloom Garden is a trusted handloom showroom in Puri, dedicated to the beauty of authentic Indian handloom fabrics and ethnic wear. We offer quality craftsmanship, timeless designs and a wide range of traditional and contemporary collections for every occasion."
      />

      <section aria-labelledby="story-title" className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="relative lg:col-span-6">
          <Parallax className="relative aspect-[4/5] overflow-hidden bg-bg-2" amount={10}>
            <div className="absolute inset-[-8%]">
              <Image src={BRAND_IMAGES.showroom} alt="Handloom Garden A/C Mega Showroom at Swargadwar Square, Puri" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
            </div>
          </Parallax>
          {second && (
            <div className="absolute -bottom-10 right-4 w-[38%] border-[6px] border-bg shadow-[0_30px_60px_-20px_rgb(28_26_23/0.45)] sm:right-[-6%]">
              <div className="relative aspect-[3/4]">
                <Image src={second.image} alt={second.title} fill sizes="240px" className="object-cover object-top" />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          <SplitReveal id="story-title" className="display-lg">
            Rooted in the <em>temple town</em>
          </SplitReveal>
          <Reveal stagger={0.08} className="prose-hg mt-8 text-lg leading-relaxed text-ink-2">
            <p>
              Our showroom stands at Swargadwar Square on Bharat Sevashram Marg, where pilgrims and families have walked towards the sea for generations. It is an air-conditioned mega showroom on the ground floor, so everyone, from grandparents to young children, can browse in comfort.
            </p>
            <p>
              Inside you will find Odisha&apos;s great weaves side by side: Sambalpuri ikat, Bomkai temple borders, Patachitra art sarees, Kotpad and Khandua, alongside kurtis, frocks, dress materials, jodo, scarves and bed covers.
            </p>
            <p>
              As a Silk Mark certified store, we give you the assurance that the silk you choose is natural silk. And because we work closely with weavers, every purchase helps keep their looms running.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="promise-title" className="on-dark bg-maroon-deep text-cream">
        <div className="kumbha text-gold/60" aria-hidden />
        <div className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
          <h2 id="promise-title" className="sr-only">Our promise</h2>
          <ScrubWords className="display-md max-w-[28ch] !leading-[1.25]">
            Every weave tells a story. We work closely with skilled weavers and artisans to bring you creations that reflect the rich culture and timeless beauty of Odisha.
          </ScrubWords>
          <Reveal stagger={0.08} className="mt-16 grid gap-px bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
            {PROMISES.map((p) => (
              <div key={p.title} className="bg-maroon-deep p-7 lg:p-8">
                <h3 className="font-display text-2xl text-gold-light">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-cream/80">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="who-title" className="mx-auto grid max-w-[1400px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-32">
        <div className="lg:col-span-5">
          <SplitReveal id="who-title" className="display-lg">
            Who comes to <em>Handloom Garden</em>
          </SplitReveal>
          {feature && (
            <Reveal className="relative mt-10 hidden aspect-[3/4] max-w-[360px] overflow-hidden lg:block">
              <Image src={feature.image} alt={feature.title} fill sizes="360px" className="object-cover object-top" />
            </Reveal>
          )}
        </div>
        <Reveal stagger={0.08} className="grid content-center gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {VISITORS.map((v) => (
            <div key={v.title} className="border-t border-line pt-6">
              <h3 className="font-display text-2xl">{v.title}</h3>
              <p className="mt-2 text-ink-2">{v.body}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-4 py-20 sm:px-6 md:flex-row md:items-center lg:px-10">
          <p className="display-md max-w-[22ch]">
            {SITE.hours.display}, <em>at Swargadwar</em>
          </p>
          <Link href="/contact" className="btn btn-primary">
            Plan your visit <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
      </section>
    </>
  );
}
