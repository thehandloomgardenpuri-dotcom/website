import Image from "next/image";
import PageHero from "@/components/PageHero";
import { editorial } from "@/data/editorial";
import VisitBlock from "@/components/VisitBlock";
import EnquiryForm from "@/components/EnquiryForm";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import OpenStatus from "@/components/OpenStatus";
import SplitReveal from "@/components/motion/SplitReveal";
import { GENERAL_FAQS } from "@/data/faqs";
import { faqSchema, STORE_ID } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { BRAND_IMAGES, SITE, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Visit Handloom Garden | Saree Showroom at Swargadwar Square, Puri",
  description:
    "Directions, timings and contact for Handloom Garden, the Silk Mark certified A/C handloom saree showroom at Swargadwar Square, Bharat Sevashram Marg, Puri, Odisha 752001. Open daily 9 AM to 9 PM.",
  path: "/contact",
  keywords: ["Handloom Garden Puri address", "saree shop Swargadwar", "handloom showroom near Jagannath Temple", "Puri saree shop timings", "Handloom Garden phone number"],
});

const VISIT_FAQS = [GENERAL_FAQS[0], GENERAL_FAQS[1], GENERAL_FAQS[4], GENERAL_FAQS[6]];

export default function ContactPage() {
  const detail = editorial("dress-materials");
  return (
    <>
      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "ContactPage", url: `${SITE_URL}/contact`, name: "Visit Handloom Garden", about: { "@id": STORE_ID } },
          faqSchema(VISIT_FAQS),
        ]}
      />
      <PageHero
        crumbs={[{ name: "Visit", path: "/contact" }]}
        watermark="ସ୍ୱର୍ଗଦ୍ୱାର"
        title={
          <>
            Visit the <em>showroom</em>
          </>
        }
        intro={`Handloom Garden is at Swargadwar Square on Bharat Sevashram Marg, Puri, a short walk from the Swargadwar beach. The air-conditioned showroom is on the ground floor and open ${SITE.hours.display.toLowerCase().replace("open ", "")}.`}
        aside={<OpenStatus className="text-ink" />}
      />

      <VisitBlock />

      <section aria-labelledby="enquiry-title" className="border-y border-line bg-bg-2">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-5">
            <SplitReveal id="enquiry-title" className="display-lg">
              Send an <em>enquiry</em>
            </SplitReveal>
            <p className="mt-6 max-w-[40ch] text-lg text-ink-2">
              Looking for a particular weave, colour or a wedding set? Tell us and the showroom team will reply, usually on WhatsApp.
            </p>
            <div className="relative mt-10 hidden aspect-[3/4] max-w-sm overflow-hidden bg-bg-2 sm:block">
              <Image src={detail.src} alt={detail.alt} fill sizes="(max-width: 1024px) 60vw, 30vw" placeholder="blur" blurDataURL={detail.blur} className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-faq" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <h2 id="visit-faq" className="display-md">
            Planning your <em>visit</em>
          </h2>
          <div className="relative mt-6 aspect-[4/3] max-w-md overflow-hidden bg-bg-2 lg:aspect-[3/4]">
            <Image src={BRAND_IMAGES.showroom} alt="Handloom Garden showroom building at Swargadwar Square, Puri" fill sizes="(max-width: 1024px) 100vw, 30vw" className="object-cover object-top" />
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={VISIT_FAQS} />
        </div>
      </section>
    </>
  );
}
