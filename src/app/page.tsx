"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, Star, Award, Palette, ShoppingBag, Building2, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import Parallax from "@/components/Parallax";

const HeroHeading = () => (
  <>
    {/* Est. / Location Tag with Lottie Animation */}
    <div className="flex items-center gap-3 mb-4 animate-fade-up">
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 md:w-10 md:h-10 text-maroon animate-spin-slow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer rim */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="1.5" />

        {/* Hub */}
        <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />

        {/* 8 Main Spokes */}
        <g transform="rotate(0 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(45 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(90 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(135 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(180 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(225 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(270 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>
        <g transform="rotate(315 50 50)">
          <path d="M 48.5 37 L 49.2 24 L 50 15 L 50.8 24 L 51.5 37 Z" fill="currentColor" />
          <circle cx="50" cy="27" r="1.5" fill="currentColor" />
        </g>

        {/* 8 Secondary Spokes */}
        <g transform="rotate(22.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(67.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(112.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(157.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(202.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(247.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(292.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
        <g transform="rotate(337.5 50 50)">
          <line x1="50" y1="37" x2="50" y2="19" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="50" cy="19" r="2" fill="currentColor" />
        </g>
      </svg>
      <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-maroon uppercase">
        ESTD. 1978 • PURI, ODISHA
      </span>
    </div>

    {/* Title */}
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.15] mb-6 animate-letter-track font-normal">
      <span className="text-gold-foil font-bold">Elegance</span> <br className="hidden sm:inline" />
      <span className="italic font-serif text-maroon font-light">
        Woven in
      </span>{" "}
      <span className="relative inline-block font-serif italic text-gold-foil font-semibold">
        Tradition
        {/* Subtle underline SVG for the word Tradition */}
        <svg className="absolute -bottom-2 left-0 w-full h-2 text-gold-foil/30" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      </span>
    </h1>

    {/* Elegant divider */}
    <div className="flex items-center gap-3 mb-6 animate-fade-up-delay-1">
      <span className="ornament-line" />
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-gold">
        <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
      </svg>
      <span className="ornament-line" />
    </div>
  </>
);

export default function HomePage() {
  const categories = [
    {
      title: "Sarees",
      href: "/category/sarees",
      image: "/images/product_16.webp",
      description: "Timeless weaves that celebrate Indian heritage.",
    },
    {
      title: "Lehenga",
      href: "/category/dresses",
      image: "/images/product_19.webp",
      description: "Graceful lehengas for weddings and celebrations.",
    },
    {
      title: "Kurti",
      href: "/category/kurtis",
      image: "/images/product_10.webp",
      description: "Elegant kurtis for everyday comfort and style.",
    },
    {
      title: "Ethnic Wear",
      href: "/category/scarves",
      image: "/images/product_20.webp",
      description: "Designer ethnic wear for your special occasion.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8 text-maroon" />,
      title: "Authentic Handlooms",
      description: "Pure handloom products crafted by skilled artisans.",
    },
    {
      icon: <Shield className="w-8 h-8 text-maroon" />,
      title: "Silk Mark Certified",
      description: "Certified guarantee of pure silk and quality.",
    },
    {
      icon: <Palette className="w-8 h-8 text-maroon" />,
      title: "Exclusive Designs",
      description: "Unique and exclusive designs you won't find anywhere else.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-maroon" />,
      title: "Custom Orders",
      description: "Tailored solutions for weddings and special occasions.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-maroon" />,
      title: "A/C Mega Showroom",
      description: "Comfortable & luxurious shopping experience.",
    },
    {
      icon: <Star className="w-8 h-8 text-maroon" />,
      title: "Trusted Heritage",
      description: "Years of trust, quality and customer delight.",
    },
  ];

  const galleryImages = [
    "/images/product_19.webp",
    "/images/product_12.webp",
    "/images/product_20.webp",
    "/images/product_10.webp",
    "/images/product_16.webp",
  ];

  const testimonials = [
    {
      image: "/images/product_19.webp",
      name: "Priyanka S., Puri",
      quote: "The saree collection is just amazing! The quality and such beautiful designs.",
    },
    {
      image: "/images/product_20.webp",
      name: "Amarpreet S., Bhubaneswar",
      quote: "We got our bridal lehenga from Handloom Garden. Excellent service and stunning collection!",
    },
    {
      image: "/images/product_19.webp",
      name: "Sunali M., Cuttack",
      quote: "My go-to showroom for ethnic wear. Always a must shopping experience.",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* ============================================ */}
      {/* SECTION 1: HERO */}
      {/* ============================================ */}
      <section id="home" className="relative min-h-[auto] sm:min-h-[75vh] lg:min-h-[80vh] bg-gradient-to-b from-cream to-cream-dark/30 flex items-center overflow-hidden border-b border-maroon/5">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full bg-maroon/[0.02] blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] rounded-full bg-gold/[0.03] blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-10 lg:py-16 relative z-10">
          {/* Mobile-only heading, sits above the grid */}
          <div className="lg:hidden w-full flex flex-col items-start text-left mb-6">
            <HeroHeading />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Premium content presentation */}
            <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
              
              {/* Desktop-only heading, sits inside the left column */}
              <div className="hidden lg:flex flex-col items-start w-full text-left">
                <HeroHeading />
              </div>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed mb-8 max-w-lg animate-fade-up-delay-2">
                Step into a world where every thread has a soul. Handloom Garden brings you authentic, masterfully woven sarees, lehengas, and kurtis—handcrafted by national award-winning Odia artisans to celebrate legacy with contemporary grace.
              </p>

              {/* Premium Luxury Features List (Replacing generic boxes) */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 sm:gap-y-4 sm:gap-x-8 mb-8 sm:mb-10 w-full max-w-md animate-fade-up-delay-2">
                {[
                  { title: "Pure Silk Mark", desc: "100% Certified authentic silk" },
                  { title: "Artisan Direct", desc: "Supporting local weaving heritage" },
                  { title: "Exclusive Weaves", desc: "Limited edition masterpieces" },
                  { title: "Puri Showroom", desc: "Visit our Swargadwar landmark" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 border-l-2 border-gold/40 pl-3">
                    <div className="flex flex-col">
                      <span className="font-serif text-xs font-bold text-charcoal tracking-wide uppercase">
                        {feat.title}
                      </span>
                      <span className="font-sans text-[10px] text-charcoal/50 mt-0.5">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 animate-fade-up-delay-3">
                <Link href="#collections" className="btn-maroon btn-maroon-glow group">
                  Explore Collections
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/about" className="btn-outline-maroon">
                  Our Story
                </Link>
              </div>
            </div>

            {/* Right Column: High-End Magazine Style Collage */}
            <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[450px] md:h-[500px] lg:h-[520px] flex items-center justify-center animate-scale-in order-1 lg:order-2">
              {/* Back Golden Pattern Ring */}
              <Parallax speed={-0.03} className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-gold/10 -z-10 animate-spin-slow" />
              
              {/* Main Saree Model Frame (Center-Right) */}
              <Parallax speed={0.03} className="absolute right-[10%] sm:right-4 top-0 sm:top-4 w-[55%] sm:w-[240px] h-[320px] sm:h-[340px] md:w-[280px] md:h-[400px] lg:w-[300px] lg:h-[430px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/85 ring-1 ring-gold/20 z-10 card-hover img-zoom animate-fade-in">
                <Image
                  src="/images/product_16.webp"
                  alt="Traditional Odia Saree Masterpiece"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </Parallax>

              {/* Overlay Saree Model Frame (Bottom-Left, overlapping into main) */}
              <Parallax speed={0.07} className="absolute left-[5%] sm:left-4 bottom-2 sm:bottom-4 w-[45%] sm:w-[180px] h-[250px] sm:h-[260px] md:w-[220px] md:h-[310px] lg:w-[240px] lg:h-[340px] rounded-xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gold/30 z-20 card-hover img-zoom animate-fade-in">
                <Image
                  src="/images/product_19.webp"
                  alt="Elegant Traditional Silk Details"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 30vw, 20vw"
                />
              </Parallax>

              {/* Floating Luxury Gold Badge */}
              <Parallax speed={0.05} className="absolute right-[5%] sm:-right-2 bottom-8 sm:bottom-20 md:bottom-28 bg-gradient-to-br from-gold to-gold-light text-maroon w-[72px] h-[72px] sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center text-center p-2 shadow-xl border-2 border-cream z-30 animate-bounce-slow">
                <span className="text-[7px] md:text-[8px] font-bold tracking-widest uppercase leading-none text-maroon/90">
                  100%
                </span>
                <span className="font-serif text-[10px] md:text-xs font-bold leading-tight my-0.5 text-maroon">
                  Handloom
                </span>
                <span className="text-[6px] md:text-[7px] tracking-wider uppercase opacity-85 leading-none text-maroon/80">
                  Certified
                </span>
              </Parallax>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: OUR COLLECTIONS */}
      {/* ============================================ */}
      <section id="collections" className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-3 tracking-wide hover:tracking-widest transition-all duration-700">
              OUR COLLECTIONS
            </h2>
            <div className="ornament-line-wide mb-4" />
            <p className="font-sans text-sm text-charcoal/60 max-w-lg mx-auto">
              A timeless range of ethnic wear for every occasion
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="group flex flex-col card-hover"
              >
                <div className="w-full aspect-[2/3] relative bg-cream-dark overflow-hidden rounded-lg img-zoom">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} collection`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-serif text-xl md:text-2xl text-charcoal font-semibold mb-1 group-hover:text-maroon transition-all duration-500 tracking-wide group-hover:tracking-widest">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-charcoal/50 mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-maroon text-xs font-bold tracking-wider uppercase group-hover:gap-2 transition-all">
                    View Collection
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: ABOUT US — PRESERVING TRADITION */}
      {/* ============================================ */}
      <section id="about" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <ScrollReveal direction="left" className="relative">
            <Parallax speed={0.03} className="w-full h-full">
              <div className="aspect-[2/3] relative rounded-lg overflow-hidden img-zoom shadow-xl border border-charcoal/5">
                <Image
                  src="/images/product_7.webp"
                  alt="Woman wearing traditional handloom saree at Handloom Garden"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Parallax>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal direction="right" className="flex flex-col">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-3">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-charcoal leading-tight mb-6">
              Preserving Tradition,{" "}
              <span className="block italic text-maroon">
                Dressing Generations
              </span>
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
              Located in the heart of Puri at Swargadwar Square, Handloom Garden is an A/C Mega Showroom offering a premium range of handloom and ethnic wear for women.
            </p>

            {/* Silk Mark Certified Badge */}
            <div className="silk-mark-badge flex items-center gap-5 mb-8 max-w-sm">
              <div className="shrink-0">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-gold overflow-hidden relative">
                  <Image
                    src="/silkmark.png"
                    alt="Silk Mark Logo"
                    fill
                    className="object-contain p-0"
                  />
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-charcoal block">
                  SILK MARK
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-maroon font-bold">
                  Certified Store
                </span>
                <p className="font-sans text-[10px] text-charcoal/50 mt-1">
                  Your Assurance of Pure Silk &amp; Handloom Quality
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: <Palette size={20} />, label: "Wide Range", sub: "of Collections" },
                { icon: <Star size={20} />, label: "Premium", sub: "Quality" },
                { icon: <Award size={20} />, label: "Trusted by", sub: "Thousands" },
                { icon: <ShoppingBag size={20} />, label: "Personalized", sub: "Service" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg bg-white/60 border border-charcoal/5">
                  <div className="text-maroon mb-2">{stat.icon}</div>
                  <span className="font-sans text-xs font-bold text-charcoal">{stat.label}</span>
                  <span className="font-sans text-[10px] text-charcoal/50">{stat.sub}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-maroon btn-maroon-glow self-start">
              Know More About Us
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: WHY CHOOSE HANDLOOM GARDEN? */}
      {/* ============================================ */}
      <section id="speciality" className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-cream bg-pattern-subtle">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3 tracking-wide hover:tracking-widest transition-all duration-700">
              WHY CHOOSE HANDLOOM GARDEN?
            </h2>
            <div className="ornament-line-wide" />
          </ScrollReveal>

          <ScrollReveal delay={100} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-6 rounded-xl bg-white border border-charcoal/5 card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-maroon/5 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-sans text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-[10px] text-charcoal/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: OUR WORK GALLERY */}
      {/* ============================================ */}
      <section id="our-work" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cream-dark/30">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-2 block">
              Our Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3 tracking-wide hover:tracking-widest transition-all duration-700">
              OUR WORK
            </h2>
            <p className="font-sans text-sm text-charcoal/60">
              A glimpse of our latest creations
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-[2/3] relative rounded-lg overflow-hidden img-zoom shadow-md">
                <Image
                  src={img}
                  alt={`Handloom Garden work showcase ${index + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal delay={200} className="text-center mt-10">
            <Link href="/category/sarees" className="btn-outline-maroon">
              View More Works
              <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: THE HANDLOOM PROMISE */}
      {/* ============================================ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <ScrollReveal direction="left">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-3 block">
              The Handloom Promise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight mb-6">
              Crafted with Passion,{" "}
              <span className="block italic text-maroon">
                Woven with Pride
              </span>
            </h2>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
              Every weave tells a story. We work closely with skilled weavers and artisans to bring you creations that reflect our rich culture and timeless beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Handpicked Fabrics",
                "Vibrant Colors",
                "Intricate Weaves",
                "Attention to Detail",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-maroon/10 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-maroon" />
                  </div>
                  <span className="font-sans text-sm text-charcoal font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Image */}
          <ScrollReveal direction="right" className="relative">
            <Parallax speed={0.03} className="w-full h-full">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden img-zoom shadow-xl border border-charcoal/5">
                <Image
                  src="/images/product_8.webp"
                  alt="Handloom artisan weaving traditional fabric"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Parallax>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 7: LOVED BY OUR CLIENTS */}
      {/* ============================================ */}
      <section id="clientele" className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3 tracking-wide hover:tracking-widest transition-all duration-700">
              LOVED BY OUR CLIENTS
            </h2>
            <div className="ornament-line-wide" />
          </ScrollReveal>

          <ScrollReveal delay={100} className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden bg-white/70 backdrop-blur-md rounded-2xl p-5 sm:p-8 md:p-12 border border-charcoal/5 shadow-xl relative min-h-[220px] sm:min-h-[280px] flex items-center justify-center transition-all duration-500">
              
              {/* Active testimonial card */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto transition-opacity duration-500 ease-in-out">
                {/* Avatar with pulsing rings */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-maroon/20 mb-6 relative shadow-lg">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-base md:text-lg text-charcoal/80 leading-relaxed mb-6 px-4 md:px-8">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>

                {/* Name */}
                <span className="font-sans text-xs md:text-sm font-bold text-maroon uppercase tracking-[0.15em]">
                  {testimonials[activeTestimonial].name}
                </span>
                <span className="font-sans text-[10px] text-charcoal/40 uppercase tracking-wider mt-1">
                  Verified Patron
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-1 sm:left-0 md:-left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cream border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-maroon hover:bg-white shadow-lg active:scale-95 transition-all cursor-pointer z-10"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-1 sm:right-0 md:-right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-cream border border-charcoal/10 flex items-center justify-center text-charcoal/60 hover:text-maroon hover:bg-white shadow-lg active:scale-95 transition-all cursor-pointer z-10"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeTestimonial === index
                      ? "bg-maroon w-6"
                      : "bg-charcoal/20 hover:bg-charcoal/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 8: NEWSLETTER / CTA BAR */}
      {/* ============================================ */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 md:px-12 bg-maroon">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — Logo + Text */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative h-11 w-11 shrink-0 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/logo_small.webp"
                  alt="Handloom Garden Logo"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold text-white leading-tight group-hover:text-gold transition-colors duration-300">
                  HANDLOOM
                </span>
                <span className="font-serif text-xs italic text-gold -mt-0.5">
                  Garden
                </span>
              </div>
            </Link>
            <div className="hidden sm:block h-8 w-px bg-white/20 mx-1" />
            <div>
              <span className="font-serif text-sm md:text-base text-white font-semibold block">
                Stay Updated with Our Latest Collections
              </span>
              <span className="font-sans text-[10px] text-white/60">
                Get updates on new arrivals, exclusive designs &amp; more.
              </span>
            </div>
          </div>

          {/* Right — Phone + Submit */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="newsletter-input flex-1 md:flex-none rounded-sm font-sans"
              pattern="[0-9]{10}"
              maxLength={15}
            />
            <button className="bg-gold text-charcoal px-6 py-3.5 text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors cursor-pointer shrink-0">
              Submit
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
