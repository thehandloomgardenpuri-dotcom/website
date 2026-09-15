"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion, whenIntroReady } from "@/lib/gsap";

interface Props {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** "scroll" reveals when the heading enters view; "intro" waits for the preloader. */
  trigger?: "scroll" | "intro";
  delay?: number;
  id?: string;
}

/** Headline that rises line by line from behind a mask, like cloth coming off the loom. */
export default function SplitReveal({ as: Tag = "h2", children, className, trigger = "scroll", delay = 0, id }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;
      let cleanup = () => {};
      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "pb-[0.08em]",
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.25,
            stagger: 0.09,
            ease: "expo.out",
            delay,
            paused: trigger === "intro",
            scrollTrigger: trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
          });
          if (trigger === "intro") cleanup = whenIntroReady(() => tween.play());
          return tween;
        },
      });
      return () => {
        cleanup();
        split.revert();
      };
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
