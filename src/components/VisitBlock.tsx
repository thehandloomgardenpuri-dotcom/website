import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { FULL_ADDRESS, MAPS, SITE, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import BrandIcon from "./BrandIcon";
import OpenStatus from "./OpenStatus";
import SplitReveal from "./motion/SplitReveal";
import Reveal from "./motion/Reveal";

/** Map + the showroom's NAP details in plain, crawlable text. */
export default function VisitBlock({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section aria-labelledby="visit-title" className="mx-auto grid max-w-[1400px] gap-10 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-10 lg:py-32">
      <Reveal className="relative order-2 min-h-[380px] overflow-hidden bg-bg-2 lg:order-1 lg:col-span-7">
        <iframe
          src={MAPS.embed}
          title="Map showing Handloom Garden at Swargadwar Square, Puri"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 size-full border-0 grayscale-[0.6] sepia-[0.25] transition-[filter] duration-700 hover:grayscale-0 hover:sepia-0"
        />
      </Reveal>

      <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-5">
        <SplitReveal as={headingLevel} id="visit-title" className="display-lg">
          Visit us at <em>Swargadwar</em>
        </SplitReveal>
        <Reveal stagger={0.07} className="mt-8 grid gap-6">
          <OpenStatus className="text-ink" />
          <address className="flex gap-4 not-italic">
            <MapPin className="mt-1 shrink-0 text-accent" size={20} strokeWidth={1.5} />
            <span className="text-lg leading-relaxed">{FULL_ADDRESS}</span>
          </address>
          <p className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-accent" size={20} strokeWidth={1.5} />
            <span>
              {SITE.hours.display}
              <span className="block text-sm text-ink-2">About 1.5 km from Shree Jagannath Temple, near Swargadwar beach.</span>
            </span>
          </p>
          <p className="flex gap-4">
            <Phone className="mt-1 shrink-0 text-accent" size={20} strokeWidth={1.5} />
            <span className="grid">
              <a href={`tel:${SITE.phones.landline.e164}`} className="hover:text-accent">Showroom: {SITE.phones.landline.display}</a>
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                WhatsApp: {SITE.phones.whatsapp.display}
              </a>
            </span>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get directions <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
            <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-ink">
              <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
