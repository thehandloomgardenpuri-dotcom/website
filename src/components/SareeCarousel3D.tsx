"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion, MQ } from "@/lib/gsap";
import { productEnquiry, productPath, type Product } from "@/lib/product-shape";
import { whatsappLink } from "@/lib/site";
import BrandIcon from "./BrandIcon";

interface Props {
  products: Product[];
  /** Pin the section and turn the ring as the page scrolls (home showcase). */
  scrollDriven?: boolean;
  heading?: React.ReactNode;
  className?: string;
}

const wrap = (value: number, n: number) => ((value % n) + n) % n;

/**
 * A cylinder of sarees in CSS 3D space. Rotation is a single GSAP-tweened
 * number fed by auto-rotation, drag inertia, arrow/keyboard steps and (when
 * pinned) scroll. Each frame, cards are faded and dimmed by their depth so
 * the front of the ring reads clearly.
 */
export default function SareeCarousel3D({ products, scrollDriven = false, heading, className }: Props) {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement[]>([]);
  // `lite`: phones/tablets skip the per-frame brightness filter (costly on mobile GPUs) and fade by opacity only.
  const state = useRef({ rotation: 0, target: 0, velocity: 0, dragging: false, radius: 600, visible: false, lite: false });
  const [active, setActive] = useState(0);
  const count = products.length;
  const step = 360 / count;

  const layout = useCallback(() => {
    const stageEl = stage.current;
    if (!stageEl) return;
    const lite = window.matchMedia(MQ.belowDesktop).matches;
    const cardWidth = lite
      ? Math.min(Math.max(stageEl.clientWidth * 0.34, 132), 210)
      : Math.min(Math.max(stageEl.clientWidth * 0.2, 150), 280);
    const radius = (cardWidth / 2 / Math.tan(Math.PI / count)) * 1.12;
    state.current.radius = radius;
    state.current.lite = lite;
    stageEl.style.setProperty("--card-w", `${cardWidth}px`);
    cards.current.forEach((card, i) => {
      card.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`;
    });
  }, [count, step]);

  const render = useCallback(() => {
    const { rotation, radius, lite } = state.current;
    if (ring.current) ring.current.style.transform = `translateZ(${-radius}px) rotateY(${-rotation}deg)`;
    cards.current.forEach((card, i) => {
      const angle = ((i * step - rotation) * Math.PI) / 180;
      const depth = (Math.cos(angle) + 1) / 2; // 1 = front, 0 = back
      card.style.opacity = String(lite ? 0.08 + depth * 0.92 : 0.15 + depth * 0.85);
      card.style.filter = lite ? "" : `brightness(${0.45 + depth * 0.55}) saturate(${0.6 + depth * 0.4})`;
      card.style.zIndex = String(Math.round(depth * 100));
    });
    const front = wrap(Math.round(rotation / step), count);
    setActive((prev) => (prev === front ? prev : front));
  }, [count, step]);

  const goTo = useCallback(
    (index: number) => {
      const s = state.current;
      const current = Math.round(s.rotation / step);
      // Shortest path around the ring.
      let delta = wrap(index - wrap(current, count), count);
      if (delta > count / 2) delta -= count;
      s.target = (current + delta) * step;
      gsap.to(s, { rotation: s.target, duration: prefersReducedMotion() ? 0 : 1.1, ease: "expo.out", onUpdate: render, overwrite: true });
    },
    [count, render, step],
  );

  useGSAP(
    () => {
      layout();
      render();
      const reduce = prefersReducedMotion();
      const s = state.current;

      // Entrance: the ring spins into place as it enters the viewport.
      if (!reduce) {
        gsap.from(s, {
          rotation: -140,
          duration: 2.2,
          ease: "expo.out",
          onUpdate: render,
          scrollTrigger: { trigger: section.current, start: "top 75%", once: true },
        });
        gsap.from(section.current!.querySelectorAll("[data-card-inner]"), {
          y: 80,
          autoAlpha: 0,
          stagger: { each: 0.04, from: "center" },
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: section.current, start: "top 75%", once: true },
        });
      }

      // Slow idle rotation, only while the ring is on screen and not being handled.
      ScrollTrigger.create({
        trigger: section.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (s.visible = self.isActive),
      });
      const idle = () => {
        if (!s.visible || s.dragging || reduce || gsap.isTweening(s)) return;
        s.rotation += 0.035;
        render();
      };
      gsap.ticker.add(idle);

      const mm = gsap.matchMedia();
      if (scrollDriven && !reduce) {
        const turnWithScroll = (vars: ScrollTrigger.Vars, degrees: number) => {
          let last = 0;
          ScrollTrigger.create({
            ...vars,
            trigger: section.current,
            onUpdate(self) {
              s.rotation += (self.progress - last) * degrees;
              last = self.progress;
              render();
            },
          });
        };
        // Desktop: the section pins and the ring makes a full turn over 1.4 screens.
        mm.add(MQ.desktop, () =>
          turnWithScroll({ start: "top top", end: () => `+=${window.innerHeight * 1.4}`, pin: true, anticipatePin: 1 }, 360),
        );
        // Phones & tablets: no pinning (controls always reachable); the ring turns as the section passes.
        mm.add(MQ.belowDesktop, () => turnWithScroll({ start: "top bottom", end: "bottom top" }, 200));
      }

      const onResize = () => {
        layout();
        render();
      };
      window.addEventListener("resize", onResize);
      return () => {
        gsap.ticker.remove(idle);
        window.removeEventListener("resize", onResize);
        mm.revert();
      };
    },
    { scope: section, dependencies: [products] },
  );

  // Pointer drag with inertia. touch-action: pan-y keeps vertical page scrolling on phones.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const s = state.current;
    let startX = 0;
    let startRotation = 0;
    let lastX = 0;
    let lastT = 0;
    let moved = false;

    const down = (e: PointerEvent) => {
      s.dragging = true;
      moved = false;
      startX = lastX = e.clientX;
      startRotation = s.rotation;
      lastT = performance.now();
      gsap.killTweensOf(s);
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!s.dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      const now = performance.now();
      s.velocity = (e.clientX - lastX) / Math.max(now - lastT, 1);
      lastX = e.clientX;
      lastT = now;
      s.rotation = startRotation - dx * 0.22;
      render();
    };
    const up = (e: PointerEvent) => {
      if (!s.dragging) return;
      s.dragging = false;
      el.releasePointerCapture?.(e.pointerId);
      // Inertia is capped so a quick flick glides a few sarees on, never whole turns
      // (which could land back on the same saree and feel like nothing happened).
      const fling = gsap.utils.clamp(-step * 4, step * 4, -s.velocity * 160);
      const projected = s.rotation + fling;
      const snapped = Math.round(projected / step) * step;
      gsap.to(s, { rotation: snapped, duration: 1.2, ease: "expo.out", onUpdate: render, overwrite: true });
    };
    // Swallow the click that ends a drag so it doesn't open a product.
    const click = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("click", click, true);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("click", click, true);
    };
  }, [render, step]);

  const current = products[active];

  return (
    <section
      ref={section}
      className={`on-dark relative flex flex-col justify-center overflow-hidden bg-maroon-deep py-16 text-cream lg:min-h-[100dvh] lg:py-20 ${className ?? ""}`}
      aria-roledescription="carousel"
      aria-label="Saree collection carousel"
    >
      {/* Soft pool of light behind the ring */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[55%] size-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(201_168_76/0.22),transparent_60%)]" />

      {heading && <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">{heading}</div>}

      <div
        ref={stage}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") goTo(active + 1);
          if (e.key === "ArrowLeft") goTo(active - 1);
        }}
        className="relative mx-auto mt-6 h-[min(50svh,400px)] w-full cursor-grab touch-pan-y select-none outline-none active:cursor-grabbing sm:h-[min(56svh,500px)] lg:h-[min(62vh,560px)]"
        style={{ perspective: "1800px", perspectiveOrigin: "50% 40%" }}
      >
        <div ref={ring} className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]">
          {products.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => {
                if (el) cards.current[i] = el;
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2 [backface-visibility:hidden]"
              style={{ width: "var(--card-w, 220px)" }}
            >
              <Link
                href={productPath(p)}
                draggable={false}
                tabIndex={-1}
                onClick={(e) => {
                  if (i !== active) {
                    e.preventDefault();
                    goTo(i);
                  }
                }}
                className="block"
                data-card-inner
                aria-label={p.title}
              >
                <div className="relative aspect-[2/3] overflow-hidden bg-maroon-dark shadow-[0_30px_60px_rgb(0_0_0/0.45)] ring-1 ring-gold/25">
                  <Image
                    src={p.image}
                    alt={`${p.title}, ${p.weaveLabel} saree at Handloom Garden Puri`}
                    fill
                    draggable={false}
                    sizes="280px"
                    quality={75}
                    placeholder={p.blur ? "blur" : "empty"}
                    blurDataURL={p.blur ?? undefined}
                    className="pointer-events-none object-cover object-top"
                  />
                </div>
                {/* Reflection on the showroom floor */}
                <div aria-hidden className="relative mt-1 hidden aspect-[2/1] overflow-hidden opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_70%)] sm:block">
                  <Image src={p.image} alt="" fill sizes="280px" quality={75} className="pointer-events-none -scale-y-100 object-cover object-bottom blur-[1px]" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-2 flex w-full max-w-[1400px] flex-col items-center gap-5 px-4 text-center sm:px-6 lg:px-10">
        <div className="flex w-full max-w-2xl items-center justify-between gap-4">
          <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous saree" className="grid size-12 shrink-0 place-items-center rounded-full border border-cream/30 transition-colors hover:border-gold hover:text-gold-light">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <div aria-live="polite" className="min-h-[5.5rem]">
            <p className="text-sm text-gold-light">{current?.weaveLabel}</p>
            <p className="mt-1 font-display text-2xl leading-tight sm:text-3xl">{current?.title}</p>
          </div>
          <button type="button" onClick={() => goTo(active + 1)} aria-label="Next saree" className="grid size-12 shrink-0 place-items-center rounded-full border border-cream/30 transition-colors hover:border-gold hover:text-gold-light">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
        {current && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href={productPath(current)} className="btn btn-gold">
              View details <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <a href={whatsappLink(productEnquiry(current))} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
