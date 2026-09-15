import Image from "next/image";
import Link from "next/link";
import { editorial } from "@/data/editorial";
import { BRAND_IMAGES } from "@/lib/site";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { GENERAL_FAQS } from "@/data/faqs";
import { WEAVE_GUIDES } from "@/data/weaves";
import { faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Questions About Handloom Garden & Buying Sarees in Puri",
  description:
    "Answers about Handloom Garden, Puri: location at Swargadwar, opening hours, Silk Mark certification, WhatsApp orders, and how to choose and identify genuine Odisha handloom sarees.",
  path: "/faq",
  keywords: ["Handloom Garden Puri timings", "saree shop near Jagannath Temple", "is Handloom Garden Silk Mark certified", "how to identify handloom saree", "best place to buy sarees in Puri"],
});

const WEAVE_FAQS = WEAVE_GUIDES.flatMap((g) => g.faqs.slice(0, 1));

export default function FaqPage() {
  const weave = editorial("sambalpuri-detail");
  return (
    <>
      <JsonLd data={faqSchema([...GENERAL_FAQS, ...WEAVE_FAQS])} />
      <PageHero
        crumbs={[{ name: "Questions", path: "/faq" }]}
        title={
          <>
            Questions, <em>answered</em>
          </>
        }
        intro="Everything visitors usually ask before coming to Handloom Garden at Swargadwar, Puri, and the questions people ask most about Odisha's handloom sarees."
      />
      <section aria-labelledby="visit-questions" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="visit-questions" className="display-md">
              The showroom
            </h2>
            <div className="relative mt-6 aspect-[4/3] max-w-md overflow-hidden bg-bg-2 lg:aspect-[3/4]">
              <Image src={BRAND_IMAGES.showroom} alt="Handloom Garden A/C Mega Showroom at Swargadwar Square, Puri" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover object-top" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={GENERAL_FAQS} />
        </div>
      </section>
      <section aria-labelledby="weave-questions" className="mx-auto grid max-w-[1400px] gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2 id="weave-questions" className="display-md">
            The weaves
          </h2>
          <p className="mt-4 text-ink-2">
            Want more depth? Read the full <Link href="/weaves" className="text-accent underline underline-offset-4">weave guides</Link>.
          </p>
          <div className="relative mt-6 aspect-[4/3] max-w-md overflow-hidden bg-bg-2 lg:aspect-[3/4]">
            <Image src={weave.src} alt={weave.alt} fill sizes="(max-width: 1024px) 100vw, 30vw" placeholder="blur" blurDataURL={weave.blur} className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={WEAVE_FAQS} />
        </div>
      </section>
    </>
  );
}
