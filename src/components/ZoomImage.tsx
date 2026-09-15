"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

interface Props {
  src: string;
  alt: string;
  blur?: string | null;
  width: number;
  height: number;
}

/** Product image with a cursor-following magnifier on pointer devices, so the weave detail is visible. */
export default function ZoomImage({ src, alt, blur, width, height }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(img.current, { scale: 1.12, autoAlpha: 0, duration: 1.6, ease: "expo.out", delay: 0.2 });
    },
    { scope: box },
  );

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !box.current || !img.current) return;
    const r = box.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    gsap.to(img.current, { scale: 2, transformOrigin: `${x}% ${y}%`, duration: 0.6, ease: "power3.out", overwrite: "auto" });
  };
  const leave = () => img.current && gsap.to(img.current, { scale: 1, duration: 0.8, ease: "expo.out", overwrite: "auto" });

  return (
    <div
      ref={box}
      onPointerMove={move}
      onPointerLeave={leave}
      className="relative overflow-hidden bg-bg-2 md:cursor-zoom-in"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div ref={img} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="(max-width: 1024px) 100vw, 55vw"
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur ?? undefined}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
