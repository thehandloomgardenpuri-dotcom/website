import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/taxonomy";
import { WEAVE_GUIDES } from "@/data/weaves";
import { FULL_ADDRESS, MAPS, SITE, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import BrandIcon from "./BrandIcon";

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-forest text-cream">
      <div className="kumbha text-gold/70" aria-hidden />
      {/* Extra bottom padding on phones keeps the last line clear of the floating WhatsApp button. */}
      <div className="mx-auto max-w-[1400px] px-4 pb-28 pt-20 sm:px-6 sm:pb-10 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="display-lg max-w-[14ch]">
              Come and feel the weave, <em>at Swargadwar</em>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Get directions <ArrowUpRight size={16} strokeWidth={1.75} />
              </a>
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
              </a>
            </div>
          </div>

          <address className="not-italic">
            <p className="text-lg leading-relaxed text-cream/90">{FULL_ADDRESS}</p>
            <p className="mt-3 text-cream/70">{SITE.hours.display}</p>
            <div className="mt-6 grid gap-1 text-cream/80">
              <a className="hover:text-gold-light" href={`tel:${SITE.phones.landline.e164}`}>Showroom {SITE.phones.landline.display}</a>
              <a className="hover:text-gold-light" href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phones.whatsapp.display}</a>
              <a className="hover:text-gold-light" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Handloom Garden on Instagram" className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold-light">
                <BrandIcon name="instagram" />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Handloom Garden on Facebook" className="grid size-11 place-items-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold-light">
                <BrandIcon name="facebook" />
              </a>
            </div>
          </address>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-cream/15 pt-10 text-sm md:grid-cols-4">
          <nav aria-label="Collections">
            <p className="mb-4 font-semibold text-gold-light">Collections</p>
            <ul className="grid gap-2 text-cream/75">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link className="hover:text-cream" href={`/collections/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Weave guides">
            <p className="mb-4 font-semibold text-gold-light">Weave guides</p>
            <ul className="grid gap-2 text-cream/75">
              {WEAVE_GUIDES.map((g) => (
                <li key={g.slug}>
                  <Link className="hover:text-cream" href={`/weaves/${g.slug}`}>{g.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Visit and help">
            <p className="mb-4 font-semibold text-gold-light">Visit</p>
            <ul className="grid gap-2 text-cream/75">
              <li><Link className="hover:text-cream" href="/contact">Showroom & map</Link></li>
              <li><Link className="hover:text-cream" href="/puri-saree-shopping-guide">Puri shopping guide</Link></li>
              <li><Link className="hover:text-cream" href="/faq">Questions answered</Link></li>
              <li><Link className="hover:text-cream" href="/about">Our story</Link></li>
              <li><Link className="hover:text-cream" href="/site-map">Site map</Link></li>
            </ul>
          </nav>
          <div>
            <p className="mb-4 font-semibold text-gold-light">Also known as</p>
            <ul className="grid gap-2 text-cream/75">
              <li className="font-odia" lang="or">ହ୍ୟାଣ୍ଡଲୁମ ଗାର୍ଡେନ, ପୁରୀ</li>
              <li lang="hi">हैंडलूम गार्डन, पुरी</li>
              <li lang="bn">হ্যান্ডলুম গার্ডেন, পুরী</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Handloom Garden, Puri. All rights reserved.</p>
          <p>Silk Mark certified handloom showroom since {SITE.foundingYear}.</p>
        </div>

        <div className="mt-8 flex justify-center border-t border-cream/10 pt-8">
          <a
            href="https://www.crayoratech.com"
            target="_blank"
            rel="noopener"
            aria-label="Designed and developed by Crayora"
            className="crayora-credit group flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-4"
          >
            <span className="text-xs tracking-[0.18em] text-cream/55 transition-colors duration-500 group-hover:text-cream/80">
              Designed and developed by
            </span>
            <Image
              src="/brand/crayora.webp"
              alt="Crayora"
              width={640}
              height={171}
              sizes="132px"
              className="crayora-mark h-[26px] w-auto sm:h-[30px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
