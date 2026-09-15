"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { productEnquiry, productPath, type Product } from "@/lib/product-shape";
import { whatsappLink } from "@/lib/site";
import { useLenis } from "./motion/SmoothScroll";
import BrandIcon from "./BrandIcon";

interface Props {
  products: Product[];
  index: number | null;
  onChange: (index: number | null) => void;
}

/** Full-screen quick view with keyboard, button and swipe navigation. */
export default function QuickView({ products, index, onChange }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const getLenis = useLenis();
  const open = index !== null;
  const product = open ? products[index] : null;
  const count = products.length;

  const go = (dir: 1 | -1) => index !== null && onChange((index + dir + count) % count);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      lenis?.start();
      document.body.style.overflow = "";
      previous?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index]);

  useGSAP(
    () => {
      if (!open || prefersReducedMotion()) return;
      gsap.fromTo("[data-qv-image]", { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "expo.out" });
      gsap.fromTo("[data-qv-text] > *", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "expo.out" });
    },
    { scope: root, dependencies: [index] },
  );

  // Swipe left / right on touch screens.
  const startX = useRef<number | null>(null);

  if (!product) return null;

  return (
    <div
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      data-lenis-prevent
      className="on-dark fixed inset-0 z-[80] grid overflow-y-auto bg-charcoal/95 text-cream backdrop-blur-sm lg:grid-cols-[1.2fr_1fr]"
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
        startX.current = null;
      }}
    >
      <button ref={closeBtn} type="button" onClick={() => onChange(null)} aria-label="Close quick view" className="fixed right-4 top-4 z-10 grid size-12 place-items-center rounded-full border border-cream/30 bg-charcoal/60 hover:border-gold">
        <X size={20} strokeWidth={1.5} />
      </button>

      <div className="relative min-h-[60vh] lg:min-h-[100dvh]">
        <div data-qv-image className="absolute inset-4 sm:inset-8">
          <Image
            key={product.id}
            src={product.image}
            alt={`${product.title} at Handloom Garden, Puri`}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            quality={85}
            placeholder={product.blur ? "blur" : "empty"}
            blurDataURL={product.blur ?? undefined}
            className="object-contain"
          />
        </div>
      </div>

      <div data-qv-text className="flex flex-col justify-center gap-5 px-6 pb-16 pt-4 sm:px-12 lg:py-16">
        <p className="text-sm text-gold-light">
          {product.weaveLabel} <span className="text-cream/50">/ {product.id}</span>
        </p>
        <h2 className="display-md">{product.title}</h2>
        <p className="max-w-[46ch] text-cream/80">{product.description}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={whatsappLink(productEnquiry(product))} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
          </a>
          <Link href={productPath(product)} className="btn btn-ghost">
            View details <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button type="button" onClick={() => go(-1)} aria-label="Previous" className="grid size-12 place-items-center rounded-full border border-cream/30 hover:border-gold">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <span className="text-sm tabular-nums text-cream/60">
            {index! + 1} of {count}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="grid size-12 place-items-center rounded-full border border-cream/30 hover:border-gold">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
