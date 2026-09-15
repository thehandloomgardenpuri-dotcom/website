"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export interface CollectionTile {
  slug: string;
  name: string;
  line: string;
  image?: { src: string; alt: string; blur?: string | null };
  pattern?: "ikat-lattice" | "pasapalli" | "temple";
  count?: number;
}

/**
 * The section pins and the collection panels pan sideways with the scroll,
 * like unrolling a bolt of cloth, on phones, tablets and desktop alike.
 */
export default function CollectionsPan({ tiles }: { tiles: CollectionTile[] }) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Every screen size: the section pins and the panels pan sideways as you scroll.
      const distance = () => Math.max(0, track.current!.scrollWidth - window.innerWidth);
      const pan = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      // Each image drifts inside its frame while panning.
      gsap.utils.toArray<HTMLElement>("[data-pan-img]").forEach((img) => {
        gsap.fromTo(img, { xPercent: -8 }, {
          xPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: img, containerAnimation: pan, start: "left right", end: "right left", scrub: true },
        });
      });
      // Tile captions rise in as each panel arrives.
      gsap.utils.toArray<HTMLElement>("[data-tile-caption]").forEach((cap) => {
        gsap.from(cap, {
          y: 24,
          autoAlpha: 0,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: { trigger: cap, containerAnimation: pan, start: "left 92%", toggleActions: "play none none reverse" },
        });
      });
    },
    { scope: wrap },
  );

  // Panel widths are capped by the viewport height too, so a panel always fits on screen
  // (including phones held sideways). With reduced motion the row becomes a native swipe rail.
  return (
    <section
      ref={wrap}
      aria-labelledby="collections-title"
      className="relative flex h-[100svh] items-center overflow-hidden bg-bg motion-reduce:h-auto motion-reduce:py-20"
    >
      <div
        ref={track}
        className="no-scrollbar flex gap-5 px-4 sm:px-6 lg:gap-8 lg:px-10 motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:scroll-px-4 motion-reduce:overflow-x-auto"
      >
        <div className="flex w-[min(82vw,26rem)] shrink-0 snap-start flex-col justify-center sm:w-[46vw] lg:w-[30vw] lg:justify-end lg:pb-10">
          <h2 id="collections-title" className="display-lg">
            Shop by <em>collection</em>
          </h2>
          <p className="mt-5 max-w-[34ch] text-ink-2">
            Six collections, all under one roof at Swargadwar. Browse here, then see them in person or on a WhatsApp video call.
          </p>
          <Link href="/collections" className="btn btn-primary mt-8 self-start">
            View collection <ArrowUpRight size={16} strokeWidth={1.75} />
          </Link>
        </div>

        {tiles.map((t, i) => (
          <Link
            key={t.slug}
            data-tile
            href={`/collections/${t.slug}`}
            className={`group relative flex w-[min(72vw,calc((100svh-12rem)*0.75))] shrink-0 snap-start flex-col sm:w-[min(42vw,calc((100svh-12rem)*0.75))] lg:w-[min(27vw,calc((100svh-16rem)*0.75))] ${i % 2 ? "lg:mt-24" : "lg:-mt-10"}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-bg-2">
              {t.image ? (
                <Image
                  data-pan-img
                  src={t.image.src}
                  alt={t.image.alt}
                  fill
                  sizes="(max-width: 1024px) 72vw, 27vw"
                  placeholder={t.image.blur ? "blur" : "empty"}
                  blurDataURL={t.image.blur ?? undefined}
                  className="scale-[1.18] object-cover object-top transition-[filter] duration-700 group-hover:brightness-110"
                />
              ) : (
                <div className={`absolute inset-0 ${t.pattern === "pasapalli" ? "pasapalli" : "ikat-lattice"}`}>
                  <div className="absolute inset-x-6 bottom-6 bg-cream/95 p-5 text-charcoal">
                    <p className="text-sm font-semibold text-maroon">In the showroom</p>
                    <p className="mt-1 text-sm leading-snug">Ask on WhatsApp for photos of today&apos;s range.</p>
                  </div>
                </div>
              )}
            </div>
            <div data-tile-caption className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">{t.name}</h3>
                <p className="mt-1 text-sm text-ink-2">{t.line}</p>
              </div>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-maroon group-hover:bg-maroon group-hover:text-cream">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        ))}
        <div aria-hidden className="w-4 shrink-0 lg:w-[6vw]" />
      </div>
    </section>
  );
}
