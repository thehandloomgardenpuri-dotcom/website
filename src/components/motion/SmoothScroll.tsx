"use client";

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const LenisContext = createContext<() => Lenis | null>(() => null);
/** Returns a getter for the active Lenis instance (null under reduced motion). */
export const useLenis = () => useContext(LenisContext);

/** Lenis inertial scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const getLenis = useCallback(() => lenis.current, []);

  // Late-loading webfonts and images change layout; re-measure triggers once they settle
  // so no reveal is left waiting at a stale position.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh, { once: true });
    return () => window.removeEventListener("load", refresh);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    // Touch devices keep native momentum scrolling (Lenis only smooths wheel input).
    const instance = new Lenis({ duration: 1.15, smoothWheel: true, syncTouch: false });
    instance.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    lenis.current = instance;
    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // New route: start at the top and re-measure every trigger.
  useEffect(() => {
    if (window.location.hash) return;
    lenis.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <LenisContext.Provider value={getLenis}>{children}</LenisContext.Provider>;
}
