"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

export interface WeaveRow {
  slug: string;
  name: string;
  odia: string;
  definition: string;
  image?: string;
}

/**
 * Editorial index of weave guides. On desktop a preview of each weave follows
 * the cursor while hovering its row, so visitors see the pattern before reading.
 */
export default function WeaveIndexList({ rows }: { rows: WeaveRow[] }) {
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const move = useRef<{ x: gsap.QuickToFunc; y: gsap.QuickToFunc } | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      move.current = {
        x: gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" }),
      };
      gsap.from("[data-row]", { y: 50, autoAlpha: 0, duration: 1.1, stagger: 0.08, ease: "expo.out", scrollTrigger: { trigger: root.current, start: "top 85%", once: true } });
    },
    { scope: root },
  );

  const show = (i: number | null) => {
    setHovered(i);
    if (!preview.current || prefersReducedMotion()) return;
    gsap.to(preview.current, { autoAlpha: i === null || !rows[i]?.image ? 0 : 1, scale: i === null ? 0.85 : 1, duration: 0.45, ease: "power3.out" });
  };

  return (
    <div
      ref={root}
      className="relative"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !root.current) return;
        const r = root.current.getBoundingClientRect();
        move.current?.x(e.clientX - r.left);
        move.current?.y(e.clientY - r.top);
      }}
    >
      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden aspect-[3/4] w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 shadow-[0_30px_60px_-20px_rgb(28_26_23/0.5)] md:block"
      >
        {rows.map((r, i) =>
          r.image ? (
            <Image key={r.slug} src={r.image} alt="" fill sizes="224px" className={`object-cover object-top transition-opacity duration-300 ${hovered === i ? "opacity-100" : "opacity-0"}`} />
          ) : null,
        )}
      </div>

      <ul className="border-t border-line">
        {rows.map((r, i) => (
          <li key={r.slug} data-row className="border-b border-line">
            <Link
              href={`/weaves/${r.slug}`}
              onPointerEnter={() => show(i)}
              onPointerLeave={() => show(null)}
              className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-x-4 gap-y-2 py-6 sm:grid-cols-[8rem_1fr_auto] sm:gap-x-6 lg:grid-cols-12 lg:gap-4 lg:py-10"
            >
              {/* Phones & tablets: an inline thumbnail stands in for the desktop cursor preview. */}
              {r.image && (
                <span className="relative row-span-3 aspect-[3/4] self-start overflow-hidden bg-bg-2 lg:hidden">
                  <Image src={r.image} alt="" fill sizes="128px" className="object-cover object-top" />
                </span>
              )}
              <span lang="or" className="col-span-2 font-odia text-sm text-gold-ink lg:col-span-2">{r.odia}</span>
              <span className="font-display text-4xl leading-tight transition-transform duration-700 ease-[var(--ease-silk)] group-hover:translate-x-2 sm:text-5xl lg:col-span-5 xl:text-6xl">
                {r.name}
              </span>
              <ArrowUpRight size={24} strokeWidth={1.25} className="justify-self-end transition-transform duration-500 group-hover:rotate-45 lg:order-last lg:col-span-1" />
              <span className="col-span-2 max-w-[52ch] text-ink-2 lg:col-span-4">{r.definition}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
