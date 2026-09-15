"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion, MQ } from "@/lib/gsap";

export interface WeaveCard {
  slug: string;
  name: string;
  odia: string;
  definition: string;
  origin: string;
  image?: { src: string; alt: string; blur?: string | null };
  pattern: string;
}

const THEMES = [
  "bg-bg-2 text-ink",
  "on-dark bg-maroon text-cream",
  "on-dark bg-forest text-cream",
  "bg-cream-dark text-charcoal",
  "on-dark bg-maroon-deep text-cream",
];

/** Sticky stack: each weave card pins, and shrinks back as the next one slides over it. */
export default function WeaveStack({ cards }: { cards: WeaveCard[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const els = gsap.utils.toArray<HTMLElement>("[data-stack-card]");
      const mm = gsap.matchMedia();

      // Tablet & desktop: sticky stack. Each card recedes (scale + shade, never opacity,
      // so cards stay opaque) as the next one slides over it.
      mm.add("(min-width: 768px)", () => {
        els.forEach((card, i) => {
          const next = els[i + 1];
          if (!next) return;
          const scroll = { trigger: next, start: "top bottom", end: "top top", scrub: true };
          gsap.to(card.firstElementChild, { scale: 0.9, ease: "none", scrollTrigger: scroll });
          gsap.to(card.querySelector("[data-shade]"), { opacity: 0.55, ease: "none", scrollTrigger: scroll });
        });
      });

      // Phones: cards flow normally (a card can be taller than the screen) and each one
      // rises in, its image settling and its text following.
      mm.add(MQ.mobile, () => {
        els.forEach((card) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 88%", once: true } });
          tl.from(card.firstElementChild, { y: 70, autoAlpha: 0, duration: 1, ease: "expo.out" })
            .from(card.querySelector("[data-stack-img]"), { scale: 1.15, duration: 1.4, ease: "expo.out" }, 0)
            .from(card.querySelectorAll("[data-stack-text] > *"), { y: 24, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "expo.out" }, 0.25);
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section aria-labelledby="weaves-title" className="relative bg-bg">
      <div className="mx-auto max-w-[1400px] px-4 pb-6 pt-24 sm:px-6 lg:px-10">
        <p className="eyebrow text-gold-ink">The weaves of Odisha</p>
        <h2 id="weaves-title" className="display-lg mt-5 max-w-[16ch]">
          Five traditions, <em>one showroom</em>
        </h2>
      </div>
      <div ref={root}>
        {cards.map((c, i) => (
          <div key={c.slug} data-stack-card className="flex items-center px-4 py-3 sm:px-6 md:sticky md:top-0 md:min-h-[100dvh] md:py-20 lg:px-10">
            <article className={`relative mx-auto grid w-full max-w-[1400px] origin-top overflow-hidden md:grid-cols-2 ${THEMES[i % THEMES.length]}`}>
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[70vh]">
                {c.image ? (
                  <Image
                    data-stack-img
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder={c.image.blur ? "blur" : "empty"}
                    blurDataURL={c.image.blur ?? undefined}
                    className="object-cover object-top"
                  />
                ) : (
                  <div data-stack-img className={`absolute inset-0 ${c.pattern}`} />
                )}
              </div>
              <div data-stack-text className="relative flex flex-col justify-center gap-5 p-7 sm:p-10 lg:p-16">
                <p aria-hidden className="pointer-events-none absolute right-4 top-2 hidden select-none font-odia text-[8rem] leading-none opacity-[0.08] xl:block" lang="or">
                  {c.odia.split(" ")[0]}
                </p>
                <h3 className="display-md relative">{c.name}</h3>
                <p className="relative max-w-[48ch] text-lg leading-relaxed opacity-90">{c.definition}</p>
                <p className="relative max-w-[48ch] text-sm leading-relaxed opacity-75">{c.origin}</p>
                <Link href={`/weaves/${c.slug}`} className="relative mt-2 inline-flex items-center gap-2 self-start border-b border-current pb-1 text-sm font-semibold">
                  Read the {c.name} guide <ArrowRight size={16} strokeWidth={1.75} />
                </Link>
              </div>
              <div data-shade aria-hidden className="pointer-events-none absolute inset-0 bg-charcoal opacity-0" />
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
