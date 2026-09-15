"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { NAV_LINKS } from "@/lib/nav";
import { BRAND_IMAGES, DEFAULT_WHATSAPP_MESSAGE, FULL_ADDRESS, SITE, whatsappLink } from "@/lib/site";
import { useLenis } from "./motion/SmoothScroll";
import BrandIcon from "./BrandIcon";

function isActive(pathname: string, href: string) {
  if (href === "/collections") return pathname === "/collections";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const getLenis = useLenis();
  const bar = useRef<HTMLElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  // Solid background after the first scroll; hide on scroll down, reveal on scroll up.
  useGSAP(() => {
    const el = bar.current!;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate(self) {
        const y = self.scroll();
        el.dataset.solid = y > 24 ? "true" : "false";
        const hide = self.direction === 1 && y > 320;
        gsap.to(el, { yPercent: hide ? -100 : 0, duration: 0.5, ease: "power3.out", overwrite: "auto" });
      },
    });
    return () => trigger.kill();
  });

  useGSAP(
    () => {
      menuTl.current = gsap
        .timeline({ paused: true })
        .set(menu.current, { display: "flex" })
        .fromTo(menu.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.75, ease: "expo.inOut" })
        .from("[data-menu-link]", { yPercent: 110, duration: 0.8, stagger: 0.06, ease: "expo.out" }, "-=0.35")
        .from("[data-menu-meta]", { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.08 }, "-=0.6");
      if (prefersReducedMotion()) menuTl.current.timeScale(20);
    },
    { scope: menu },
  );

  useEffect(() => {
    if (open) {
      gsap.to(bar.current, { yPercent: 0, duration: 0.3, overwrite: "auto" });
      menuTl.current?.timeScale(1).play();
      getLenis()?.stop();
      document.body.style.overflow = "hidden";
    } else {
      menuTl.current?.timeScale(1.6).reverse();
      getLenis()?.start();
      document.body.style.overflow = "";
    }
  }, [open, getLenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        ref={bar}
        data-solid="false"
        data-open={open}
        className="group/header fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 data-[solid=true]:bg-bg/85 data-[solid=true]:shadow-[0_1px_0_var(--c-line)] data-[solid=true]:backdrop-blur-md data-[open=true]:z-[80] data-[open=true]:!bg-transparent data-[open=true]:!shadow-none data-[open=true]:!backdrop-blur-none"
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="Handloom Garden, home" className="relative block h-11 w-[104px] shrink-0 rounded-full group-data-[open=true]/header:bg-cream sm:h-12 sm:w-[114px]">
            <Image src={BRAND_IMAGES.wordmark} alt="Handloom Garden" fill priority sizes="114px" className="object-contain" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative px-3 py-2 text-[0.8125rem] font-semibold tracking-wide text-ink-2 transition-colors hover:text-ink aria-[current=page]:text-accent"
                >
                  {link.label}
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-silk)] group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden !px-5 !py-3 sm:inline-flex"
            >
              <BrandIcon name="whatsapp" size={16} />
              Ask on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink group-data-[open=true]/header:border-cream/40 lg:hidden"
            >
              {open ? <X size={20} strokeWidth={1.5} className="text-cream" /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menu}
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="on-dark fixed inset-0 z-[70] hidden flex-col justify-between overflow-y-auto bg-maroon-deep px-6 pb-8 pt-24 text-cream"
        data-lenis-prevent
      >
        <p aria-hidden className="pointer-events-none absolute -right-6 top-16 select-none font-odia text-[28vw] leading-none text-cream/[0.04]">
          ପୁରୀ
        </p>
        <nav aria-label="Mobile" className="relative flex flex-col">
          {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((link) => (
            <span key={link.href} className="overflow-hidden border-b border-cream/10">
              <Link
                data-menu-link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-[2.5rem] leading-tight aria-[current=page]:italic aria-[current=page]:text-gold-light"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <div className="relative mt-10 flex flex-col gap-5 text-sm text-cream/75">
          <p data-menu-meta>{FULL_ADDRESS}</p>
          <p data-menu-meta>{SITE.hours.display}</p>
          <div data-menu-meta className="flex flex-wrap gap-3">
            <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <BrandIcon name="whatsapp" size={16} /> Ask on WhatsApp
            </a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid size-12 place-items-center rounded-full border border-cream/30">
              <BrandIcon name="instagram" />
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid size-12 place-items-center rounded-full border border-cream/30">
              <BrandIcon name="facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
