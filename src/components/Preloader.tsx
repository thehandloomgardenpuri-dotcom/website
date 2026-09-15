"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { BRAND_IMAGES } from "@/lib/site";
import { INTRO_STORAGE_KEY as STORAGE_KEY } from "@/lib/boot";

const THREADS = 19;

/** Reveal the page and let the hero start its entrance (called as the gate begins to open). */
function releaseIntro() {
  if (document.documentElement.classList.contains("pre-done")) return;
  document.documentElement.classList.add("pre-done");
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {}
  window.dispatchEvent(new Event("hg:intro"));
}
/**
 * First-visit loader: warp threads are strung, cloth weaves upward with a
 * temple border while the counter runs, then the overlay opens like a gate
 * (Swargadwar, "the gate of heaven", is where the showroom stands).
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el || document.documentElement.classList.contains("pre-skip")) return;

      const counter = el.querySelector<HTMLElement>("[data-counter]")!;
      const progress = { value: 0 };
      const render = () => (counter.textContent = String(Math.round(progress.value)).padStart(3, "0"));
      const remove = () => gsap.set(el, { display: "none" });

      if (prefersReducedMotion()) {
        releaseIntro();
        gsap.to(el, { autoAlpha: 0, duration: 0.4, delay: 0.2, onComplete: remove });
        return;
      }

      const pageLoaded = new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve(), { once: true });
        setTimeout(resolve, 3200); // never hold visitors hostage on slow networks
      });

      const intro = gsap.timeline();
      intro
        .from("[data-thread]", { scaleY: 0, transformOrigin: "top", duration: 0.9, stagger: { each: 0.03, from: "center" }, ease: "expo.inOut" })
        .from("[data-logo]", { autoAlpha: 0, scale: 0.86, duration: 1, ease: "expo.out" }, 0.35)
        .from("[data-caption] > *", { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.7 }, 0.55)
        .to(progress, { value: 86, duration: 1.7, ease: "power2.inOut", onUpdate: render }, 0.2)
        .to("[data-cloth]", { scaleY: 0.86, duration: 1.7, ease: "power2.inOut" }, 0.2);

      intro.then(() =>
        pageLoaded.then(() => {
          gsap
            .timeline({ onComplete: remove })
            .to(progress, { value: 100, duration: 0.45, ease: "power1.out", onUpdate: render })
            .to("[data-cloth]", { scaleY: 1, duration: 0.45, ease: "power1.out" }, "<")
            .to("[data-center]", { autoAlpha: 0, y: -20, duration: 0.5, ease: "power2.in" }, "+=0.1")
            .to("[data-gate='left']", { xPercent: -101, duration: 1.1, ease: "expo.inOut" }, "-=0.1")
            .to("[data-gate='right']", { xPercent: 101, duration: 1.1, ease: "expo.inOut" }, "<")
            .add(releaseIntro, "-=0.8");
        }),
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="preloader" role="status" aria-live="polite" aria-label="Loading Handloom Garden">
      {(["left", "right"] as const).map((side) => (
        <div
          key={side}
          data-gate={side}
          className="absolute inset-y-0 w-1/2 overflow-hidden bg-maroon-deep"
          style={{ [side]: 0 }}
        >
          {/* Warp threads and woven cloth are drawn across both halves so the gate splits the fabric. */}
          <div className="absolute inset-y-0 w-[200%]" style={{ [side]: 0 }}>
            <div
              data-cloth
              className="absolute inset-x-0 bottom-0 h-[42%] origin-bottom ikat-lattice"
              style={{ transform: "scaleY(0)" }}
            >
              <div className="kumbha absolute inset-x-0 -top-[10px] text-maroon-dark" />
            </div>
            {Array.from({ length: THREADS }, (_, i) => (
              <span
                key={i}
                data-thread
                className="absolute top-0 h-full w-px bg-gold/40"
                style={{ left: `${((i + 1) / (THREADS + 1)) * 100}%` }}
              />
            ))}
          </div>
        </div>
      ))}

      <div data-center className="absolute inset-0 flex flex-col items-center justify-center px-6 text-cream">
        <div data-logo className="relative size-28 sm:size-36 rounded-full bg-cream p-1 shadow-[0_20px_60px_rgb(0_0_0/0.35)]">
          <Image src={BRAND_IMAGES.roundLogo} alt="" fill sizes="144px" priority className="object-contain" />
        </div>
        <div data-caption className="mt-7 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-2xl sm:text-3xl italic">Woven in Odisha, chosen in Puri</p>
          <p className="font-odia text-sm text-gold-light/80">ହସ୍ତତନ୍ତର ଏକ ବଗିଚା</p>
        </div>
        <p className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 font-display text-5xl sm:text-7xl tabular-nums text-gold-light" aria-hidden>
          <span data-counter>000</span>
        </p>
        <p className="absolute bottom-7 left-6 sm:bottom-12 sm:left-10 eyebrow text-cream/70">Swargadwar, Puri</p>
      </div>
    </div>
  );
}
