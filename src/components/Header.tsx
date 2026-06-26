"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Heart,
  User,
  ShoppingBag
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Sarees", href: "/category/sarees" },
    { name: "Kurtis", href: "/category/kurtis" },
    { name: "Bed Covers", href: "/category/bed-covers" },
    { name: "Dresses", href: "/category/dresses" },
    { name: "Scarves", href: "/category/scarves" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1C1A17]/5 bg-[#F9F6F0]/90 backdrop-blur-md">
      {/* Brand & Utilities Row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        
        {/* Left Label */}
        <div className="hidden lg:flex flex-col">
          <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#1C1A17]/50">
            PURI, ODISHA
          </span>
          <span className="font-sans text-[8px] tracking-wider text-[#1C1A17]/40 mt-0.5">
            SWARGADWAR SQUARE
          </span>
        </div>

        {/* Center Brand Logo (Large Logo) */}
        <div className="flex justify-center items-center flex-grow lg:flex-grow-0">
          <Link href="/" className="relative block h-16 w-60">
            <Image
              src="/images/logo_large.webp"
              alt="Puri Handloom Garden Logo"
              fill
              className="object-contain object-center lg:object-left"
              priority
            />
          </Link>
        </div>

        {/* Right Header Icons */}
        <div className="hidden lg:flex items-center gap-7 text-[#1C1A17]/70">
          <button className="hover:text-[#1C1A17] transition-colors cursor-pointer" aria-label="Search">
            <Search size={17} />
          </button>
          <button className="hover:text-[#1C1A17] transition-colors cursor-pointer" aria-label="Wishlist">
            <Heart size={17} />
          </button>
          <button className="hover:text-[#1C1A17] transition-colors cursor-pointer" aria-label="Account">
            <User size={17} />
          </button>
          <button className="hover:text-[#1C1A17] transition-colors cursor-pointer" aria-label="Shopping Bag">
            <ShoppingBag size={17} />
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#1C1A17] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Category Navigation Menu */}
      <div className="hidden lg:block w-full border-t border-[#1C1A17]/5 py-4 bg-[#F9F6F0]/30">
        <nav className="max-w-7xl mx-auto flex justify-center gap-12">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors link-hover-underline ${
                  isActive ? "text-[#C2B280]" : "text-[#1C1A17]/70 hover:text-[#1C1A17]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#F9F6F0] border-b border-[#1C1A17]/10 flex flex-col px-6 py-8 gap-6 z-40 bg-grid-dots">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-sans text-[10px] tracking-[0.2em] uppercase font-semibold transition-colors ${
                  isActive ? "text-[#C2B280]" : "text-[#1C1A17]/70 hover:text-[#1C1A17]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
