"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // duration in ms
  id?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 1000,
  id,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // triggers when 5% of the element is visible
        rootMargin: "0px 0px -60px 0px", // triggers slightly before entering full viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
      case "down":
        return isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0";
      case "left":
        return isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0";
      case "right":
        return isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0";
      case "none":
        return isVisible ? "opacity-100" : "opacity-0";
      default:
        return isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0";
    }
  };

  const style = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${getDirectionClass()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
