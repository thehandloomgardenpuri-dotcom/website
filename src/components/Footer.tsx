import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  const primaryWhatsApp = "https://wa.me/919937157653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const alternateWhatsApp = "https://wa.me/919861900000?text=Hi%20Rajesh,%20I%20have%20an%20enquiry.";
  const landlineCall = "tel:06752220037";
  const emailMailto = "mailto:rajeshmullick.puri@gmail.com";

  return (
    <footer className="bg-charcoal text-raw-silk py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative center divider line for high-fashion balance */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[41.6%] w-[1px] bg-raw-silk/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-raw-silk/10 text-center md:text-left">
          
          {/* Tagline block */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col items-center md:items-start justify-start lg:pr-8">
            {/* Small Logo in Footer */}
            <div className="relative h-20 w-20 mb-4">
              <Image
                src="/images/logo_small.webp"
                alt="Puri Handloom Garden Icon Mark"
                fill
                className="object-contain object-center md:object-left"
              />
            </div>

            <span className="font-serif text-base tracking-[0.25em] text-raw-silk mb-2 block uppercase">
              PURI HANDLOOM GARDEN
            </span>
            <p className="font-sans text-xs text-raw-silk/60 max-w-sm leading-relaxed tracking-wide">
              Preserving and cataloging the legacy of Odia master weavers. Our showroom at Swargadwar Square is a sanctuary for authentic wefts, vegetable-dyed cottons, and interlocked silk sarees.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center md:items-start">
            <span className="font-serif text-xs uppercase tracking-widest text-sand mb-4 block">
              INDEX
            </span>
            <div className="space-y-2">
              <Link href="/" className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block">
                01. Home Gallery
              </Link>
              <Link href="/about" className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block">
                02. Heritage Narratives
              </Link>
              <Link href="/#collections" className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block">
                03. Product Catalogue
              </Link>
              <Link href="/contact" className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block">
                04. Showroom Location
              </Link>
              <Link href="/contact#inquiry" className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block">
                05. Custom Weave Request
              </Link>
            </div>
          </div>

          {/* Contacts details */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col items-center md:items-start">
            <span className="font-serif text-xs uppercase tracking-widest text-sand mb-4 block">
              REGISTRY CHANNELS
            </span>
            <div className="space-y-3">
              <a
                href={emailMailto}
                className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block truncate max-w-full"
              >
                rajeshmullick.puri@gmail.com
              </a>
              <a
                href={primaryWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block"
              >
                Primary WhatsApp: +91 99371 57653
              </a>
              <a
                href={alternateWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block"
              >
                Weaver Relations Mobile: +91 98619 00000
              </a>
              <a
                href={landlineCall}
                className="font-sans text-xs text-raw-silk/60 hover:text-raw-silk transition-colors duration-300 block"
              >
                Puri Landline: 06752-220037
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-raw-silk/40 flex items-center gap-2">
            <MapPin size={10} />
            PURI, ODISHA • SWARGADWAR SQUARE
          </span>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-raw-silk/40">
            © 2026 Handloom Garden. Crafted by SHNKR.DEV
          </span>
        </div>
      </div>
    </footer>
  );
}
