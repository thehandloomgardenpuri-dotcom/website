"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, Flip, useGSAP);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  // Mobile browsers resize the viewport as the address bar shows/hides; don't re-measure (and jump) for that.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const EASE_SILK = "expo.out";

/** Device bands used with gsap.matchMedia() so each device gets a tuned animation variant. */
export const MQ = {
  mobile: "(max-width: 767px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)",
  belowDesktop: "(max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  touch: "(hover: none), (pointer: coarse)",
} as const;

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Resolves once the preloader has finished (immediately on repeat visits). */
export function whenIntroReady(callback: () => void): () => void {
  if (document.documentElement.classList.contains("pre-done")) {
    callback();
    return () => {};
  }
  const handler = () => callback();
  window.addEventListener("hg:intro", handler, { once: true });
  return () => window.removeEventListener("hg:intro", handler);
}

export { gsap, ScrollTrigger, SplitText, Flip, useGSAP };
