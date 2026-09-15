"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

let hasNavigated = false;

/**
 * Route transition: after the first page, every navigation lifts a maroon
 * curtain (edged with the kumbha temple border) off the incoming page.
 */
export default function Template({ children }: { children: ReactNode }) {
  const cover = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = cover.current!;
    if (!hasNavigated || prefersReducedMotion()) {
      hasNavigated = true;
      return;
    }
    gsap
      .timeline()
      .set(el, { autoAlpha: 1, yPercent: 0 })
      .to(el, { yPercent: -100, duration: 0.9, ease: "expo.inOut", delay: 0.05 })
      .set(el, { autoAlpha: 0 });
  });

  return (
    <>
      <div ref={cover} aria-hidden className="pointer-events-none invisible fixed inset-0 z-[95] bg-maroon-deep">
        <div className="kumbha absolute inset-x-0 -bottom-[10px] rotate-180 text-maroon-deep" />
      </div>
      {children}
    </>
  );
}
