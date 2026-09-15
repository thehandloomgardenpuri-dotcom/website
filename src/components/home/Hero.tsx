"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap, useGSAP, prefersReducedMotion, whenIntroReady } from "@/lib/gsap";
import type { Product } from "@/lib/product-shape";
import { BRAND_IMAGES, MAPS } from "@/lib/site";
import SplitReveal from "../motion/SplitReveal";

export default function Hero({ slides }: { slides: Product[] }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      const frames = gsap.utils.toArray<HTMLElement>("[data-slide]");

      const intro = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
      if (!reduce) {
        intro
          .fromTo("[data-arch]", { clipPath: "inset(100% 0% 0% 0% round 999px 999px 0 0)" }, { clipPath: "inset(0% 0% 0% 0% round 999px 999px 0 0)", duration: 1.6, ease: "expo.inOut" }, 0)
          .from("[data-slide='0'] img", { scale: 1.3, duration: 2.2 }, 0.1)
          .from("[data-fade]", { autoAlpha: 0, y: 24, duration: 1.1, stagger: 0.1 }, 0.55)
          .from("[data-inset]", { autoAlpha: 0, y: 60, rotate: -4, duration: 1.4 }, 0.8)
          .from("[data-badge]", { autoAlpha: 0, scale: 0.6, rotate: -30, duration: 1.2, ease: "back.out(1.6)" }, 1.1);
      }
      const release = whenIntroReady(() => intro.play());

      // Slow cross-dissolve through the premium sarees, wiping upward like a drape being lifted.
      let slideshow: gsap.core.Timeline | undefined;
      if (!reduce && frames.length > 1) {
        slideshow = gsap.timeline({ repeat: -1, delay: 3.2 });
        frames.forEach((frame, i) => {
          const next = frames[(i + 1) % frames.length];
          slideshow!
            .set(next, { zIndex: 2, clipPath: "inset(100% 0% 0% 0%)" })
            .set(frame, { zIndex: 1 })
            .to(next, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "expo.inOut" }, "+=3")
            .fromTo(next.querySelector("img"), { scale: 1.18 }, { scale: 1, duration: 3.2, ease: "power2.out" }, "<")
            .set(frame, { zIndex: 0 });
        });
      }

      // Scroll-away: the arch drifts up slower than the text for depth.
      if (!reduce) {
        gsap.to("[data-arch-wrap]", { yPercent: -12, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
        gsap.to("[data-inset]", { yPercent: -40, ease: "none", scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true } });
      }

      return () => {
        release();
        slideshow?.kill();
      };
    },
    { scope: root },
  );

  const inset = slides[slides.length - 1];

  return (
    <section ref={root} className="relative overflow-hidden pt-24 lg:pt-20" aria-labelledby="hero-title">
      <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1400px] items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-10">
        <div className="lg:col-span-7" data-hero-intro>
          <p data-fade className="eyebrow text-gold-ink">Swargadwar Square, Puri</p>
          <SplitReveal as="h1" id="hero-title" trigger="intro" delay={0.35} className="display-xl mt-6 !text-[clamp(2.4rem,4.9vw,5.4rem)]">
            Puri&apos;s home of <br className="hidden sm:block" />
            <em className="sm:whitespace-nowrap">authentic handloom</em>
          </SplitReveal>
          <p data-fade className="mt-7 max-w-[44ch] text-lg leading-relaxed text-ink-2">
            Sambalpuri, Bomkai and Patachitra sarees, kurtis and more, in a Silk Mark certified A/C showroom by the sea.
          </p>
          <div data-fade className="mt-9 flex flex-wrap gap-3">
            <Link href="/collections" className="btn btn-primary">
              View collection <ArrowRight size={16} strokeWidth={1.75} />
            </Link>
            <a href={MAPS.directions} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-ink">
              Get directions <ArrowUpRight size={16} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] lg:col-span-5 lg:max-w-none" data-hero-intro>
          <div data-arch-wrap className="relative ml-auto w-[82%] sm:w-[78%]">
            <div data-arch className="arch relative aspect-[3/4.4] bg-bg-2 shadow-[0_40px_80px_-30px_rgb(61_11_20/0.45)]">
              {slides.slice(0, -1).map((s, i) => (
                <div key={s.id} data-slide={i} className="absolute inset-0" style={{ zIndex: i === 0 ? 1 : 0 }}>
                  <Image
                    src={s.image}
                    alt={`${s.title}, a ${s.weaveLabel.toLowerCase()} saree at Handloom Garden Puri`}
                    fill
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : "low"}
                    sizes="(max-width: 1024px) 80vw, 36vw"
                    quality={85}
                    placeholder={s.blur ? "blur" : "empty"}
                    blurDataURL={s.blur ?? undefined}
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <div aria-hidden className="kumbha mt-3 text-gold/80" />
          </div>

          {inset && (
            <div data-inset className="absolute -left-2 bottom-[8%] w-[40%] sm:left-0">
              <div className="relative aspect-[3/4] overflow-hidden border-[6px] border-bg shadow-[0_30px_60px_-20px_rgb(28_26_23/0.45)]">
                <Image src={inset.image} alt={`${inset.title} from the premium collection`} fill sizes="200px" className="object-cover object-top" />
              </div>
            </div>
          )}

          <div data-badge className="absolute right-0 top-[6%] grid size-24 place-items-center rounded-full bg-cream p-2 shadow-[0_18px_40px_-12px_rgb(28_26_23/0.4)] ring-1 ring-gold/50 sm:size-28 lg:-right-4">
            <div className="relative size-full">
              <Image src={BRAND_IMAGES.silkMark} alt="Silk Mark certified store" fill sizes="112px" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
