import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/motion/Reveal";
import SplitReveal from "@/components/motion/SplitReveal";
import { WEAVE_GUIDES } from "@/data/weaves";
import type { QA } from "@/data/weaves";
import { getAllProducts } from "@/lib/products";
import { articleSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND_IMAGES, FULL_ADDRESS, MAPS, SITE } from "@/lib/site";

const PATH = "/puri-saree-shopping-guide";
const TITLE = "Where to Buy Sarees in Puri: A Handloom Shopping Guide";
const DESCRIPTION =
  "Planning to buy a saree in Puri? What Odisha handloom to look for, how to spot genuine Sambalpuri, Bomkai and Patachitra, the best time to shop, and where to find a Silk Mark certified showroom near Swargadwar.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
  keywords: [
    "where to buy sarees in Puri",
    "Puri shopping guide",
    "what to buy in Puri",
    "saree shop near Jagannath Temple",
    "Puri handloom market",
    "Sambalpuri saree Puri",
    "Puri souvenirs",
    "Swargadwar market Puri",
  ],
});

const GUIDE_FAQS: QA[] = [
  {
    q: "What is the famous thing to buy in Puri?",
    a: "Odisha handloom is the classic purchase from Puri: Sambalpuri ikat and Bomkai sarees, Patachitra art from nearby Raghurajpur, and lighter pieces such as ikat stoles, jodo and scarves that are easy to carry home.",
  },
  {
    q: "Where can I buy authentic handloom sarees near Jagannath Temple?",
    a: "Handloom Garden at Swargadwar Square, around 1.5 km from Shree Jagannath Temple, is a Silk Mark certified handloom showroom with Sambalpuri, Bomkai, Patachitra and Ikat sarees in an air-conditioned store.",
  },
  {
    q: "When is the best time to shop for sarees in Puri?",
    a: "Weekday mornings are the calmest. Around festivals such as Rath Yatra, the town is very busy, so shop early in the day. Handloom Garden is open every day from 9 AM to 9 PM.",
  },
  {
    q: "Can I buy a saree in Puri and have help choosing?",
    a: "Yes. Tell the showroom team the occasion, colours you like and your budget, and they will bring out suitable weaves. You can also send photos you like on WhatsApp before you visit.",
  },
];

const STEPS = [
  {
    title: "Decide the occasion",
    body: "Wedding or puja silks (Sambalpuri silk, Bomkai, Khandua) are different buys from everyday cotton handloom. Knowing the occasion narrows the choice quickly.",
  },
  {
    title: "Learn two or three weaves",
    body: "Sambalpuri for tie-dyed ikat motifs, Bomkai for temple borders, Patachitra for painted stories. Our weave guides explain each in a few minutes.",
  },
  {
    title: "Check the reverse",
    body: "Handloom ikat shows its pattern on both sides with soft, feathered edges. Crisp motifs only on the front usually mean a print.",
  },
  {
    title: "Ask for the Silk Mark",
    body: "For silk, the Silk Mark label from the Silk Mark Organisation of India certifies natural silk. Certified stores can show it to you.",
  },
  {
    title: "Think about carrying it home",
    body: "Stoles, jodo and scarves are light for travel. Sarees fold flat and travel well in their own cloth bag.",
  },
];

export default async function ShoppingGuidePage() {
  const products = await getAllProducts();
  const lead = products.find((p) => p.id === "PHG-PRM-010") ?? products[0];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: TITLE, description: DESCRIPTION, path: PATH, image: lead?.image ?? BRAND_IMAGES.showroom, about: ["Shopping in Puri", "Odisha handloom sarees", "Swargadwar"] }),
          faqSchema(GUIDE_FAQS),
        ]}
      />
      <PageHero
        crumbs={[{ name: "Puri shopping guide", path: PATH }]}
        watermark="ପୁରୀ"
        title={
          <>
            Buying a saree <em>in Puri</em>
          </>
        }
        intro="Puri is one of the best places in India to buy Odisha handloom. Weaves from every corner of the state reach the temple town, and Raghurajpur, the home of Patachitra art, is close by. This guide covers what to buy, how to know it is genuine, and where to shop."
      />

      <article className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SplitReveal className="display-md">What to buy in Puri</SplitReveal>
            <Reveal stagger={0.06} className="mt-10 grid gap-px bg-line sm:grid-cols-2">
              {WEAVE_GUIDES.map((g) => (
                <Link key={g.slug} href={`/weaves/${g.slug}`} className="group flex flex-col gap-3 bg-bg p-6 transition-colors hover:bg-bg-2">
                  <span className="flex items-center justify-between font-display text-2xl">
                    {g.name}
                    <ArrowRight size={18} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-2">{g.definition}</span>
                </Link>
              ))}
              <div className="flex flex-col gap-3 bg-bg-2 p-6">
                <span className="font-display text-2xl">Easy gifts</span>
                <span className="text-sm leading-relaxed text-ink-2">Ikat stoles, jodo, scarves and bed covers: light, packable and unmistakably Odisha.</span>
              </div>
            </Reveal>
          </div>
          {lead && (
            <Reveal className="relative aspect-[3/4] overflow-hidden bg-bg-2 lg:col-span-4 lg:col-start-9">
              <Image src={lead.image} alt={`${lead.title}, a Patachitra saree available in Puri`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" />
            </Reveal>
          )}
        </div>

        <div className="mt-24 lg:mt-32">
          <SplitReveal className="display-md">Five tips before you buy</SplitReveal>
          <Reveal stagger={0.07} className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <div key={s.title} className="border-t-2 border-gold pt-5">
                <span className="font-display text-3xl italic text-gold-ink" aria-hidden>{i + 1}</span>
                <h3 className="mt-2 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </article>

      <section aria-labelledby="where-title" className="on-dark bg-forest text-cream">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image src={BRAND_IMAGES.showroom} alt="Handloom Garden showroom building at Swargadwar Square, Puri" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
          </div>
          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <SplitReveal id="where-title" className="display-lg">
              Where to shop: <em>Swargadwar</em>
            </SplitReveal>
            <Reveal stagger={0.07} className="mt-8 grid gap-5 text-lg leading-relaxed text-cream/85">
              <p>
                Swargadwar, the busy seafront quarter of Puri, is where many visitors stay and walk in the evenings. Handloom Garden&apos;s A/C mega showroom sits right here, at {FULL_ADDRESS}.
              </p>
              <p>
                It is a Silk Mark certified store with Sambalpuri, Bomkai, Patachitra and Ikat sarees, kurtis, frocks, dress materials, jodo, scarves and bed covers, on the ground floor and open {SITE.hours.display.toLowerCase().replace("open ", "")}.
              </p>
            </Reveal>
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Get directions <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
              <Link href="/collections" className="btn btn-ghost">
                View collection
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-labelledby="guide-faq" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10">
        <h2 id="guide-faq" className="display-md lg:col-span-4">
          Shopping in Puri: <em>questions</em>
        </h2>
        <div className="lg:col-span-8">
          <FaqList faqs={GUIDE_FAQS} />
        </div>
      </section>
    </>
  );
}
