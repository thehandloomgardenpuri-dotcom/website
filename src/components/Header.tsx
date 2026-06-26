"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Collections", href: "/category/sarees", hasDropdown: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const collectionsDropdown = [
    { name: "Sarees", href: "/category/sarees" },
    { name: "Kurtis", href: "/category/kurtis" },
    { name: "Dresses & Lehengas", href: "/category/dresses" },
    { name: "Bed Covers", href: "/category/bed-covers" },
    { name: "Scarves & Jodo", href: "/category/scarves" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-md shadow-sm border-b border-maroon/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-14 w-14 md:h-16 md:w-16">
              <Image
                src="/images/logo_small.webp"
                alt="Handloom Garden Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-charcoal leading-tight tracking-wide">
                HANDLOOM
              </span>
              <span className="font-serif text-lg md:text-xl italic text-maroon -mt-1">
                Garden
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationLinks.map((link) => {
              const isActive = link.hasDropdown
                ? pathname.startsWith("/category")
                : pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative flex items-center"
                    onMouseEnter={() => setIsCollectionsHovered(true)}
                    onMouseLeave={() => setIsCollectionsHovered(false)}
                  >
                    <Link
                      href={link.href}
                      className={`group px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300 inline-flex items-center gap-1 whitespace-nowrap ${
                        isActive
                          ? "text-maroon font-bold"
                          : "text-charcoal/70 hover:text-maroon"
                      }`}
                    >
                      <span className="link-hover-underline">{link.name}</span>
                      <ChevronDown size={12} className={`transition-transform duration-300 ${isCollectionsHovered ? "rotate-180 text-maroon" : "text-charcoal/50"}`} />
                    </Link>

                    {/* Dropdown Menu */}
                    {isCollectionsHovered && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-cream border border-charcoal/10 shadow-xl rounded-md py-2 z-50 animate-fade-in">
                        {collectionsDropdown.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-4 py-2.5 text-[10px] md:text-xs font-semibold text-charcoal/80 hover:text-maroon hover:bg-maroon/5 uppercase tracking-wider transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group px-3 xl:px-4 py-2 text-[11px] xl:text-xs font-semibold tracking-[0.08em] uppercase transition-colors duration-300 inline-flex items-center whitespace-nowrap ${
                    isActive
                      ? "text-maroon font-bold"
                      : "text-charcoal/70 hover:text-maroon"
                  }`}
                >
                  <span className="link-hover-underline">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right side - A/C Mega Showroom badge + Mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-maroon text-cream px-4 py-2 rounded-sm border border-gold/30 shadow-sm">
              <span className="text-[9px] font-bold tracking-widest uppercase">
                A/C Mega Showroom
              </span>
            </div>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Sub-info line */}
        <div className="hidden lg:flex items-center gap-4 pb-2 -mt-2">
          <span className="text-[9px] tracking-wider text-charcoal/40 uppercase">
            A/C MEGA SHOWROOM •
          </span>
          <span className="text-[9px] tracking-wider text-charcoal/40 uppercase">
            SWARGADWAR SQUARE, PURI
          </span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-cream border-t border-charcoal/10 shadow-lg z-40 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-6 py-6 gap-1">
            {navigationLinks.map((link) => {
              const isActive = link.hasDropdown
                ? pathname.startsWith("/category")
                : pathname === link.href;
              
              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="flex flex-col">
                    <button
                      onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                      className={`flex items-center justify-between py-3 px-4 text-sm font-semibold tracking-wide uppercase transition-colors rounded-lg w-full text-left cursor-pointer ${
                        isActive
                          ? "text-maroon bg-maroon/5 font-bold"
                          : "text-charcoal/70 hover:text-maroon hover:bg-maroon/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isMobileCollectionsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Mobile Accordion Items */}
                    {isMobileCollectionsOpen && (
                      <div className="flex flex-col pl-6 mt-1 border-l border-maroon/10 gap-1 animate-fade-in">
                        {collectionsDropdown.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileCollectionsOpen(false);
                            }}
                            className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-charcoal/60 hover:text-maroon"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-3 px-4 text-sm font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                    isActive
                      ? "text-maroon bg-maroon/5 font-bold"
                      : "text-charcoal/70 hover:text-maroon hover:bg-maroon/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-charcoal/10">
              <div className="flex items-center justify-center gap-2 bg-maroon text-cream px-4 py-3 rounded-sm">
                <span className="text-[10px] font-bold tracking-widest uppercase">
                  A/C Mega Showroom
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
