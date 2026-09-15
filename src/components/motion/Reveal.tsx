"use client";

import { useRef, type ElementType, type ReactNode, type CSSProperties } from "react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Animate direct children one after another instead of the wrapper as a whole. */
  stagger?: number;
  y?: number;
  delay?: number;
}

/** Fades content up as it enters the viewport. Used to pace long pages, never on the hero. */
export default function Reveal({ as: Tag = "div", children, className, style, stagger, y = 36, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const targets = stagger ? Array.from(el.children) : [el];
      gsap.set(targets, { autoAlpha: 0, y });
      ScrollTrigger.batch(targets, {
        start: "top 94%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: "expo.out", stagger: stagger ?? 0, delay, overwrite: true }),
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
