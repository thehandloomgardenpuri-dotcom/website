"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxProps {
  children?: ReactNode;
  speed?: number; // Speed multiplier (e.g. -0.15 to 0.15)
  className?: string;
}

export default function Parallax({ children, speed = 0.05, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let active = true;

    const handleScroll = () => {
      if (!active || !ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const relativePosition = elementCenter - viewportCenter;
        
        const calculatedOffset = relativePosition * speed;
        setOffset(calculatedOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      active = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)`, transition: "transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)" }}>
      {children}
    </div>
  );
}
