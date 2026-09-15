"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "@/lib/gsap";

/** Long statement that "inks in" word by word as the reader scrolls through it. */
export default function ScrubWords({ as: Tag = "p", children, className }: { as?: ElementType; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      const split = SplitText.create(el, { type: "words", autoSplit: true });
      // Ends while the paragraph is still well inside the viewport, on every screen size,
      // so the reader always sees it fully inked.
      gsap.fromTo(
        split.words,
        { opacity: 0.22 },
        { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 70%", scrub: 0.6 } },
      );
      return () => split.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
