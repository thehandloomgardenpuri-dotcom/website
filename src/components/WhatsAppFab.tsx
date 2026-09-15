"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import BrandIcon from "./BrandIcon";

/** Persistent WhatsApp enquiry button; slides in once the visitor starts scrolling. */
export default function WhatsAppFab() {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    const el = ref.current!;
    gsap.set(el, { autoAlpha: 0, y: 24 });
    const st = ScrollTrigger.create({
      start: 280,
      end: "max",
      onToggle: (self) => gsap.to(el, { autoAlpha: self.isActive ? 1 : 0, y: self.isActive ? 0 : 24, duration: 0.5, ease: "power3.out" }),
    });
    return () => st.kill();
  });

  return (
    <a
      ref={ref}
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask Handloom Garden on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-maroon pl-4 pr-4 text-cream shadow-[0_14px_40px_rgb(61_11_20/0.35)] ring-1 ring-gold/40 transition-[gap,padding] duration-500 ease-[var(--ease-silk)] hover:gap-3 hover:pr-6 sm:bottom-8 sm:right-8"
    >
      <BrandIcon name="whatsapp" size={24} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width] duration-500 ease-[var(--ease-silk)] group-hover:max-w-[12rem]">
        Ask on WhatsApp
      </span>
    </a>
  );
}
