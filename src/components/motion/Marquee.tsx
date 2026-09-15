"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/**
 * Endless ribbon of weave names. Scrolling speeds it up and reverses it with
 * the scroll direction, so the band feels like cloth feeding through a loom.
 */
export default function Marquee({ children, className, speed = 40 }: { children: ReactNode; className?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const track = ref.current!.querySelector<HTMLElement>(".marquee-track")!;
      const loop = gsap.to(track, { xPercent: -50, duration: speed, ease: "none", repeat: -1 });
      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate(self) {
          const boost = Math.min(Math.abs(self.getVelocity()) / 350, 5);
          gsap.to(loop, { timeScale: (self.direction === 1 ? 1 : -1) * (1 + boost), duration: 0.3, overwrite: true });
          gsap.to(loop, { timeScale: self.direction === 1 ? 1 : -1, duration: 1.2, delay: 0.3, overwrite: false });
        },
      });
      return () => st.kill();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <div className="marquee-track" aria-hidden>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
