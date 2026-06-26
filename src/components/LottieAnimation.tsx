"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
}

export default function LottieAnimation({
  src,
  className = "w-32 h-32",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if lottie player is already loaded in window
    if (typeof window !== "undefined" && (window as any).LottiePlayer) {
      setScriptLoaded(true);
    }
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Load Lottie Web Player script dynamically */}
      <Script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Fallback state (Pulsing SVG Lotus/Mandala) while script is loading */}
      {!scriptLoaded && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse">
          <svg
            className="text-sand/50 w-12 h-12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" className="fill-sand/10" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            <path d="m4.93 4.93 2.83 2.83M16.24 16.24m2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        </div>
      )}

      {/* Lottie Player component */}
      {/* @ts-ignore */}
      <lottie-player
        src={src}
        background="transparent"
        speed={speed}
        loop={loop ? "" : undefined}
        autoplay={autoplay ? "" : undefined}
        style={{ width: "100%", height: "100%", opacity: scriptLoaded ? 1 : 0 }}
        className="transition-opacity duration-500"
      />
    </div>
  );
}
