"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap, Flip, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { WEAVE_LABEL, type Weave } from "@/data/taxonomy";
import type { Product } from "@/lib/product-shape";
import ProductCard from "./ProductCard";
import QuickView from "./QuickView";

type Filter = Weave | "all" | "premium";

interface Props {
  products: Product[];
  filters?: boolean;
}

/** Filterable grid. Filter changes re-flow the cards with GSAP Flip rather than a hard cut. */
export default function ProductGrid({ products, filters = true }: Props) {
  const grid = useRef<HTMLDivElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [quick, setQuick] = useState<number | null>(null);

  const options = useMemo(() => {
    const counts = new Map<Weave, number>();
    products.forEach((p) => counts.set(p.weave, (counts.get(p.weave) ?? 0) + 1));
    const list: { value: Filter; label: string; count: number }[] = [{ value: "all", label: "All", count: products.length }];
    const premium = products.filter((p) => p.collection === "premium").length;
    if (premium && premium < products.length) list.push({ value: "premium", label: "Premium collection", count: premium });
    (Object.keys(WEAVE_LABEL) as Weave[]).forEach((w) => {
      const count = counts.get(w);
      if (count) list.push({ value: w, label: WEAVE_LABEL[w], count });
    });
    return list;
  }, [products]);

  const visible = useMemo(
    () => products.filter((p) => filter === "all" || (filter === "premium" ? p.collection === "premium" : p.weave === filter)),
    [products, filter],
  );
  const visibleIds = useMemo(() => new Set(visible.map((p) => p.id)), [visible]);

  const choose = (value: Filter) => {
    if (value === filter) return;
    if (!prefersReducedMotion()) flipState.current = Flip.getState(grid.current!.querySelectorAll("[data-card]"));
    setFilter(value);
  };

  useLayoutEffect(() => {
    const state = flipState.current;
    if (!state) return;
    flipState.current = null;
    Flip.from(state, {
      targets: grid.current!.querySelectorAll("[data-card]"),
      duration: 0.8,
      ease: "expo.inOut",
      stagger: 0.015,
      absolute: true,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.7, delay: 0.2 }),
      onLeave: (els) => gsap.to(els, { autoAlpha: 0, scale: 0.94, duration: 0.4 }),
      onComplete: () => {
        // Cards that matched but had not yet been scrolled into view are still hidden by the entrance reveal.
        gsap.to(grid.current!.querySelectorAll("[data-card]:not(.hidden)"), { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.02, overwrite: true });
        ScrollTrigger.refresh();
      },
    });
  }, [filter]);

  // Cards rise into place as they scroll into view.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-card]");
      gsap.set(cards, { y: 48, autoAlpha: 0 });
      ScrollTrigger.batch(cards, {
        start: "top 92%",
        once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.1, ease: "expo.out", stagger: 0.08 }),
      });
    },
    { scope: grid },
  );

  return (
    <div>
      {filters && options.length > 2 && (
        <div role="toolbar" aria-label="Filter by weave" className="no-scrollbar -mx-4 mb-10 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              aria-pressed={filter === o.value}
              onClick={() => choose(o.value)}
              className="shrink-0 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-2 transition-colors hover:border-ink hover:text-ink aria-pressed:border-maroon aria-pressed:bg-maroon aria-pressed:text-cream"
            >
              {o.label} <span className="ml-1 tabular-nums opacity-60">{o.count}</span>
            </button>
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} of {products.length}
      </p>

      <div ref={grid} className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-14">
        {products.map((p, i) => (
          <div key={p.id} data-card className={visibleIds.has(p.id) ? "" : "hidden"}>
            <ProductCard product={p} priority={i < 4} onQuickView={() => setQuick(visible.findIndex((v) => v.id === p.id))} />
          </div>
        ))}
      </div>

      <QuickView products={visible} index={quick} onChange={setQuick} />
    </div>
  );
}
