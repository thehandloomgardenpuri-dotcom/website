"use client";

import React from "react";

interface OrnamentalDividerProps {
  className?: string;
}

export default function OrnamentalDivider({ className = "" }: OrnamentalDividerProps) {
  return (
    <div className={`flex items-center justify-center py-6 select-none ${className}`}>
      {/* Left fading divider line */}
      <div className="h-[1px] w-24 md:w-48 bg-gradient-to-r from-transparent via-sand/30 to-sand/60" />
      
      {/* Traditional Indian Weave/Lotus Motif SVG */}
      <svg
        className="mx-4 text-sand w-16 h-8 drop-shadow-sm"
        viewBox="0 0 64 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Central petal */}
        <path
          d="M32 4 C27 12, 27 24, 32 28 C37 24, 37 12, 32 4 Z"
          className="fill-sand/10 animate-pulse duration-3000"
        />
        {/* Left petal */}
        <path
          d="M32 16 C22 10, 18 20, 32 28 C18 20, 22 10, 32 16 Z"
          className="fill-sand/5"
        />
        {/* Right petal */}
        <path
          d="M32 16 C42 10, 46 20, 32 28 C46 20, 42 10, 32 16 Z"
          className="fill-sand/5"
        />
        
        {/* Horizontal scroll accents */}
        <path d="M4 16 L22 16 M42 16 L60 16" />
        
        {/* Decorative dots */}
        <circle cx="32" cy="16" r="1.5" className="fill-sand" />
        <circle cx="20" cy="16" r="1" className="fill-sand" />
        <circle cx="44" cy="16" r="1" className="fill-sand" />
        <circle cx="10" cy="16" r="1.25" className="fill-sand" />
        <circle cx="54" cy="16" r="1.25" className="fill-sand" />
      </svg>
      
      {/* Right fading divider line */}
      <div className="h-[1px] w-24 md:w-48 bg-gradient-to-l from-transparent via-sand/30 to-sand/60" />
    </div>
  );
}
