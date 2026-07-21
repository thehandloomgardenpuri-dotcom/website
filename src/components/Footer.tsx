"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ShnkrDevBadge from "./ShnkrDevBadge";

// Inline SVG icons for social media
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  const primaryWhatsApp = "https://wa.me/919937937653?text=Hi%20Handloom%20Garden,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20enquire.";
  const emailMailto = "mailto:rajeshmullick.puri@gmail.com";
  const landlineCall = "tel:06752220037";

  return (
    <footer className="bg-[#1A2A1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative h-12 w-12 shrink-0 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/logo_small.webp"
                  alt="Handloom Garden Logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white leading-tight group-hover:text-gold transition-colors duration-300">
                  HANDLOOM
                </span>
                <span className="font-serif text-base italic text-gold -mt-0.5">
                  Garden
                </span>
              </div>
            </Link>
            <p className="font-sans text-xs text-white/50 leading-relaxed max-w-xs mb-4">
              Preserving the legacy of Odia master weavers since generations. Your trusted destination for authentic handloom.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61591189491062" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-charcoal transition-all duration-300" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/handloomgarden.puri/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-charcoal transition-all duration-300" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-5">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/#our-work" },
                { name: "Clientele", href: "/#clientele" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Collections */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-5">
              Collections
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Sarees", href: "/category/sarees" },
                { name: "Kurtis", href: "/category/kurtis" },
                { name: "Bed Covers", href: "/category/bed-covers" },
                { name: "Dress Material", href: "/category/dresses" },
                { name: "Scarves & Stoles", href: "/category/scarves" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Information */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-5">
              Information
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { name: "Silk Mark Certification", href: "/#speciality" },
                { name: "Handloom Quality", href: "/#our-work" },
                { name: "Care Guide", href: "/about" },
                { name: "Store Location", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-xs text-white/50 hover:text-gold transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 5 — Contact Us */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase text-gold mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-white/50 leading-relaxed">
                  Swargadwar Square, Puri, Odisha - 752001
                </span>
              </div>
              <a href={landlineCall} className="flex items-center gap-2.5 font-sans text-xs text-white/50 hover:text-gold transition-colors">
                <Phone size={14} className="text-gold shrink-0" />
                +91 6752 220037
              </a>
              <a href={primaryWhatsApp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-sans text-xs text-white/50 hover:text-gold transition-colors">
                <Phone size={14} className="text-gold shrink-0" />
                +91 99379 37653
              </a>
              <a href={emailMailto} className="flex items-center gap-2.5 font-sans text-xs text-white/50 hover:text-gold transition-colors">
                <Mail size={14} className="text-gold shrink-0" />
                <span className="truncate">handloomgardenpuri@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-white/50 leading-relaxed">
                  Open Daily: 9:00 AM – 9:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="font-sans text-[10px] text-white/30 tracking-wider">
            © 2026 Handloom Garden. All Rights Reserved.
          </span>
          <ShnkrDevBadge />
        </div>
      </div>
    </footer>
  );
}
