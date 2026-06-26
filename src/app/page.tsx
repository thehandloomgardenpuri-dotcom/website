"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Mail,
  Compass,
  Send
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import LottieAnimation from "@/components/LottieAnimation";

// Inline custom SVGs for Facebook and Instagram to prevent dependency export mismatches
const FacebookIcon = ({ size = 14, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 14, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function HomePage() {
  // Business Metadata Links & Coordinates
  const alternateWhatsApp = "https://wa.me/919861900000?text=Hi%20Rajesh,%20I%20have%20an%20enquiry.";
  const landlineCall = "tel:06752220037";
  const emailMailto = "mailto:rajeshmullick.puri@gmail.com";
  const physicalAddress = "Swargadwar Square, Bharath Sevashram Marg, Puri, Odisha";

  const categories = [
    {
      title: "Sarees",
      href: "/category/sarees",
      image: "/images/product_1.webp",
      cluster: "Traditional Silk & Cotton Sarees",
    },
    {
      title: "Dupatta, Stoles & Shawls",
      href: "/category/scarves",
      image: "/images/product_2.webp",
      cluster: "Handwoven Dupattas & Stoles",
    },
    {
      title: "Dress Material",
      href: "/category/dresses",
      image: "/images/product_3.webp",
      cluster: "Unstitched Dress Materials",
    },
    {
      title: "Ready-to-Wear & Kurtis",
      href: "/category/kurtis",
      image: "/images/product_4.webp",
      cluster: "Readymade Kurtis & Sets",
    },
    {
      title: "Home Décor & Bed Covers",
      href: "/category/bed-covers",
      image: "/images/product_5.webp",
      cluster: "Handspun Cotton Bed Covers",
    },
  ];

  const masterpieceWeaves = [
    {
      title: "Patachitra Painted Silk",
      origin: "Raghurajpur Village",
      artisan: "Traditional Artists",
      duration: "Hand-painted",
      dyes: "Natural Colors",
      image: "/images/product_8.webp",
      description: "Beautiful hand-painted designs showing traditional Indian stories on pure tussar silk. Every saree is painted by hand using natural colors.",
      presettedText: "Hi Handloom Garden, I am interested in learning more about the Patachitra Painted Silk.",
    },
    {
      title: "Bomkai Silk & Cotton",
      origin: "Ganjam District",
      artisan: "Local Weavers",
      duration: "Handwoven",
      dyes: "Natural Dyes",
      image: "/images/product_9.webp",
      description: "Woven using traditional techniques, featuring bold borders and patterns inspired by local folklore.",
      presettedText: "Hi Handloom Garden, I am interested in learning more about the Bomkai Silk & Cotton.",
    },
    {
      title: "Kotpad Organic Cotton",
      origin: "Koraput District",
      artisan: "Tribal Weavers",
      duration: "Handwoven",
      dyes: "Natural Root Dyes",
      image: "/images/product_10.webp",
      description: "Thick, comfortable organic cotton dyed using natural roots. Woven slowly by local tribal artisans in rich, rustic colors.",
      presettedText: "Hi Handloom Garden, I am interested in learning more about the Kotpad Organic Cotton.",
    },
    {
      title: "Sambalpuri Silk Ikat",
      origin: "Bargarh District",
      artisan: "Local Weavers",
      duration: "Handwoven",
      dyes: "Natural Dyes",
      image: "/images/product_11.webp",
      description: "Beautiful double-ikat silk sarees with matching patterns on both sides. The threads are tied and dyed before weaving to create traditional geometric designs.",
      presettedText: "Hi Handloom Garden, I am interested in learning more about the Sambalpuri Silk Ikat.",
    },
    {
      title: "Nuapatna Gita Govinda Silk",
      origin: "Nuapatna Village",
      artisan: "Traditional Weavers",
      duration: "Handwoven",
      dyes: "Natural Yellow Dyes",
      image: "/images/product_12.webp",
      description: "Traditional silk sarees woven with sacred verses from the Gita Govinda, used for temple rituals in Puri.",
      presettedText: "Hi Handloom Garden, I am interested in learning more about the Nuapatna Gita Govinda Silk.",
    },
  ];

  const patronDiaries = [
    {
      image: "/images/product_13.webp",
      name: "Ananya Mohanty",
      occasion: "Bridal Handloom Portfolio",
      quote: "The saree is absolutely beautiful. The fabric is soft, lightweight, and perfect for special occasions.",
    },
    {
      image: "/images/product_14.webp",
      name: "Siddharth & Priyanka",
      occasion: "Festive Ceremony",
      quote: "Beautiful handwoven silk saree with traditional designs. Very happy with the quality.",
    },
    {
      image: "/images/product_15.webp",
      name: "Devi Archana Prasanna",
      occasion: "Heritage Gallery Walk",
      quote: "Great collection of authentic handlooms at reasonable prices. Buying directly supports the weavers.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-raw-silk text-charcoal flex flex-col selection:bg-sand selection:text-charcoal bg-grid-dots">
      
      <Header />

      {/* SECTION 2: EDITORIAL HERO SECTION */}
      <section id="home" className="relative min-h-[calc(100vh-140px)] flex items-center pt-12 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          <div className="hidden lg:block absolute top-0 bottom-0 left-[41.6%] w-[1px] bg-charcoal/5 pointer-events-none" />

          {/* Text block (5 cols) centered and aligned */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left items-start lg:pr-12 z-10 order-2 lg:order-1 animate-fade-up">
            <span className="text-[9px] uppercase tracking-[0.25em] text-sand font-bold mb-4">
              WELCOME TO HANDLOOM GARDEN
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.15] mb-6 font-normal text-shadow-premium">
              Authentic <span className="text-sand font-medium italic">Handloom Sarees</span> &amp; Ethnic Wear in Puri
            </h1>
            <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed tracking-wide mb-8">
              We welcome you to explore our collection of pure handwoven cottons and silks. Sourced directly from local weavers of Odisha, every design brings you traditional patterns, beautiful colors, and the touch of true craftsmanship.
            </p>
            
            <a
              href="#collections"
              className="inline-block border-b border-charcoal pb-1 text-[10px] tracking-[0.25em] uppercase font-bold hover:text-sand hover:border-sand transition-colors self-start"
            >
              Explore our collections
            </a>

            {/* Weave Specs Sheet Block simplified */}
            <div className="mt-12 pt-6 border-t border-charcoal/5 grid grid-cols-2 gap-4 w-full">
              <div>
                <span className="font-sans text-[8px] uppercase tracking-wider text-charcoal/40 block">LOCAL WEAVES</span>
                <span className="font-serif text-xs text-charcoal mt-1 block">Sonpur, Nuapatna, Koraput</span>
              </div>
              <div>
                <span className="font-sans text-[8px] uppercase tracking-wider text-charcoal/40 block">COLORS</span>
                <span className="font-serif text-xs text-charcoal mt-1 block">Traditional Natural Dyes</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Hero Image Block (6 cols) */}
          <div className="lg:col-span-6 w-full z-10 relative order-1 lg:order-2 animate-fade-up">
            <div className="aspect-[2/3] relative bg-neutral-200 overflow-hidden rounded-3xl">
              <Image
                src="/images/product_6.webp"
                alt="Puri Handloom Silk Saree Collection Showcase"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-2 bg-raw-silk border border-charcoal/5 px-4 py-2 text-[9px] tracking-widest uppercase font-mono hidden md:block">
              PURI, ODISHA
            </div>
          </div>
        </div>
        
        {/* Scroll Down Lottie Animation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
          <span className="font-sans text-[7px] tracking-[0.25em] uppercase text-charcoal/40">Scroll</span>
          <LottieAnimation
            src="https://lottie.host/9e8b75f8-8ef1-4b13-a4c3-b097e88de47a/sO5uE9M47H.json"
            className="w-8 h-8"
          />
        </div>

        <WhatsAppWidget />
      </section>

      {/* SECTION 3: ELEGANT SCROLLING MARQUEE TICKER */}
      <section className="border-y border-charcoal/5 bg-charcoal py-4 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-sand font-medium pr-12">
            AUTHENTIC SAREES • COTTON KURTIS • BED COVERS • DRESS MATERIALS • STOLES
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-sand font-medium pr-12">
            AUTHENTIC SAREES • COTTON KURTIS • BED COVERS • DRESS MATERIALS • STOLES
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-sand font-medium pr-12" aria-hidden="true">
            AUTHENTIC SAREES • COTTON KURTIS • BED COVERS • DRESS MATERIALS • STOLES
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-sand font-medium pr-12" aria-hidden="true">
            AUTHENTIC SAREES • COTTON KURTIS • BED COVERS • DRESS MATERIALS • STOLES
          </span>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 4: HERITAGE & CRAFTSMANSHIP BANNER SECTION */}
      <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-b border-charcoal/5 relative">
        <ScrollReveal className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center mb-16">
          <span className="text-[9px] uppercase tracking-[0.25em] text-sand font-bold mb-4">
            OUR LEGACY
          </span>
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl lg:text-4xl text-charcoal tracking-wide uppercase mb-6">
            Puri Handloom Garden – <span className="text-sand font-medium italic">Tradition</span> You Can Wear
          </h2>
          <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed tracking-wide max-w-3xl">
            Welcome to Puri Handloom Garden, a trusted showroom in Swargadwar Square, Puri. We are dedicated to bringing you the finest authentic handloom sarees and ethnic wear. Sourced directly from local weavers across Odisha, our collections offer traditional designs, pure fabrics, and lasting quality for every occasion. Every purchase supports local weavers and helps keep our heritage alive.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} className="max-w-xl mx-auto">
          <div className="aspect-[2/3] relative bg-neutral-200 overflow-hidden rounded-3xl">
            <Image
              src="/images/product_7.webp"
              alt="Traditional Odisha Handloom threads on wooden loom shuttle"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </ScrollReveal>
      </section>

      <OrnamentalDivider />

      {/* SECTION 5: SHOP BY CATEGORIES (Borderless Categories) */}
      <section id="collections" className="py-24 px-6 md:px-12 lg:px-24 border-b border-charcoal/5 bg-raw-silk">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl tracking-wider text-charcoal uppercase">
              Shop by <span className="text-sand font-medium italic">Categories</span>
            </h2>
            
            <a
              href="#collections"
              className="inline-flex items-center gap-1.5 mt-4 text-[9px] tracking-wider uppercase font-semibold text-charcoal hover:text-sand transition-colors group"
            >
              <span>View All Collection</span>
              <Send size={9} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>

          {/* Borderless category list placing text underneath */}
          <ScrollReveal delay={100} className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((cat, index) => (
              <Link
                key={index}
                href={cat.href}
                className="group flex flex-col items-center"
              >
                <div className="w-full aspect-[2/3] relative bg-neutral-100 rounded-3xl overflow-hidden shadow-none">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} category view`}
                    fill
                    className="object-cover object-top transform scale-100 group-hover:scale-103 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>

                <span className="font-sans text-xs md:text-sm font-bold tracking-wider text-charcoal text-center mt-4 block uppercase group-hover:text-sand transition-colors">
                  {cat.title}
                </span>
                <span className="font-sans text-[9px] tracking-wider text-charcoal/40 text-center mt-0.5 block uppercase">
                  {cat.cluster}
                </span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 6: CHERISHED BY OUR PATRONS */}
      <section className="py-24 border-b border-charcoal/5 bg-raw-silk/50">
        <div className="max-w-7xl mx-auto">
          
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal font-normal">
              Cherished by Our <span className="text-sand font-medium italic">Patrons</span>
            </h2>
            <p className="font-sans text-[11px] md:text-xs text-charcoal/70 leading-relaxed max-w-xl mx-auto mt-4 font-light">
              Each Odia handloom saree is handwoven by master artisans, chosen by women of grace for life&apos;s most treasured moments.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="flex overflow-x-auto snap-x snap-mandatory gap-8 px-6 md:px-12 lg:px-24 pb-8 scrollbar-thin">
            {patronDiaries.map((diary, index) => (
              <div
                key={index}
                className="w-72 md:w-80 min-w-[280px] snap-start flex flex-col group"
              >
                <div className="w-full aspect-[2/3] relative bg-neutral-100 rounded-3xl overflow-hidden">
                  <Image
                    src={diary.image}
                    alt={`${diary.name} wearing handloom saree`}
                    fill
                    className="object-cover object-top transform scale-100 group-hover:scale-103 transition-all duration-700"
                    sizes="300px"
                  />
                </div>

                <div className="mt-4 flex flex-col text-center px-4">
                  <span className="font-sans text-xs font-bold text-charcoal uppercase tracking-wider">
                    {diary.name}
                  </span>
                  <span className="font-sans text-[9px] text-sand font-bold tracking-widest uppercase mt-0.5">
                    {diary.occasion}
                  </span>
                  <p className="font-serif italic text-xs text-charcoal/70 leading-relaxed mt-2 px-2">
                    &quot;{diary.quote}&quot;
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 7: THE MASTERPIECE WEAVES SHOWCASE (WEAVE REGISTRY) */}
      <section className="py-24 border-b border-charcoal/5 bg-raw-silk">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="px-6 md:px-12 lg:px-24 mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-sand font-bold mb-4 block">
              MASTERPIECE WEAVE REGISTRY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-normal">
              The Heritage <span className="text-sand font-medium italic">Archives</span>
            </h2>
            <p className="font-sans text-xs text-charcoal/60 mt-2 max-w-lg">
              A detailed catalog of Odisha weaves currently preserved and available for enquiry at our Swargadwar gallery.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 lg:px-24 pb-8 scrollbar-thin">
            {masterpieceWeaves.map((weave, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[420px] snap-start border border-charcoal/10 bg-raw-silk p-8 flex flex-col justify-between relative group hover:border-sand/30 transition-all duration-300 rounded-3xl"
              >
                <div className="absolute top-0 bottom-0 right-[40px] w-[1px] bg-charcoal/5 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-sans text-[9px] tracking-widest text-sand font-bold uppercase">
                      {weave.origin}
                    </span>
                    <span className="font-mono text-[9px] text-charcoal/40">
                      REG: PHG-0{index + 1}
                    </span>
                  </div>

                  <div className="relative w-full aspect-[2/3] mb-6 overflow-hidden rounded-2xl">
                    <Image
                      src={weave.image}
                      alt={weave.title}
                      fill
                      className="object-cover object-top transform group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="font-serif text-xl text-charcoal mb-4 font-normal">
                    {weave.title}
                  </h3>

                  {/* Specification Table */}
                  <div className="border-t border-b border-charcoal/10 py-4 mb-6 space-y-2">
                    <div className="flex justify-between text-[10px] font-sans">
                      <span className="text-charcoal/40 uppercase">Artisan Loom</span>
                      <span className="text-charcoal font-medium">{weave.artisan}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-sans">
                      <span className="text-charcoal/40 uppercase">Time to Weave</span>
                      <span className="text-charcoal font-medium">{weave.duration}</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-sans">
                      <span className="text-charcoal/40 uppercase">Natural Dye</span>
                      <span className="text-charcoal font-medium">{weave.dyes}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed mb-8 pr-10">
                    {weave.description}
                  </p>
                </div>
                
                <a
                  href={`https://wa.me/919937157653?text=${encodeURIComponent(weave.presettedText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-charcoal text-charcoal hover:bg-charcoal hover:text-raw-silk px-4 py-2.5 text-[9px] tracking-[0.2em] uppercase font-semibold transition-colors duration-300 self-start"
                >
                  Request Registry Photos
                  <ArrowUpRight size={12} />
                </a>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 8: "THE HANDLOOM GARDEN STANDARDS" (USPs Overhaul) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-charcoal/5 bg-raw-silk/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
          
          <div className="hidden lg:block absolute top-0 bottom-0 left-[41.6%] w-[1px] bg-charcoal/5 pointer-events-none" />

          {/* Left Column title */}
          <ScrollReveal className="lg:col-span-5 lg:pr-12">
            <span className="text-[9px] uppercase tracking-[0.25em] text-sand font-bold mb-4 block">
              OUR STANDARDS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight font-normal">
              Why Choose <span className="text-sand font-medium italic">Handloom Garden</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed tracking-wide mt-6">
              We prioritize premium fabrics, fine craftsmanship, and lasting durability in every piece. We operate under strict quality check mandates to preserve traditional weaving methods.
            </p>
          </ScrollReveal>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right Column List (Replaced childish boxes) */}
          <ScrollReveal delay={100} className="lg:col-span-6 space-y-12">
            <div>
              <div className="flex gap-4 items-start">
                <span className="font-serif text-base text-sand italic">01.</span>
                <div>
                  <h3 className="font-sans font-bold text-xs tracking-wider uppercase text-charcoal mb-2">
                    Authentic Handloom Collection
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    Carefully selected handwoven fabrics and ethnic wear crafted by skilled artisans.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4 items-start">
                <span className="font-serif text-base text-sand italic">02.</span>
                <div>
                  <h3 className="font-sans font-bold text-xs tracking-wider uppercase text-charcoal mb-2">
                    Wide Variety
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    From elegant sarees and dress materials to traditional and contemporary outfits for every occasion.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4 items-start">
                <span className="font-serif text-base text-sand italic">03.</span>
                <div>
                  <h3 className="font-sans font-bold text-xs tracking-wider uppercase text-charcoal mb-2">
                    Quality You Can Trust
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    We prioritize premium fabrics, fine craftsmanship, and lasting durability in every piece.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-4 items-start">
                <span className="font-serif text-base text-sand italic">04.</span>
                <div>
                  <h3 className="font-sans font-bold text-xs tracking-wider uppercase text-charcoal mb-2">
                    Supporting Indian Artisans
                  </h3>
                  <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                    Every purchase helps preserve traditional weaving techniques and supports local weaving communities.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 9: VISIT OUR SHOWROOM */}
      <section id="showroom" className="py-24 px-6 md:px-12 lg:px-24 bg-charcoal text-raw-silk relative overflow-hidden bg-grid-dots-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          
          <div className="hidden lg:block absolute top-0 bottom-0 left-[41.6%] w-[1px] bg-raw-silk/5 pointer-events-none" />

          {/* Location details (5 cols) */}
          <ScrollReveal className="lg:col-span-5 flex flex-col z-10">
            <span className="text-[10px] uppercase tracking-[0.25em] text-sand font-bold mb-4">
              VISIT OUR SHOWROOM
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-raw-silk mb-6 font-normal">
              Our Puri <span className="text-sand font-medium italic">Showroom</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#F9F6F0]/80 leading-relaxed tracking-wide mb-6">
              Located at Swargadwar Square, near the shore of the Bay of Bengal, our showroom is a warm space to touch and feel our authentic handwoven sarees and cotton fabrics in person. We look forward to welcoming you.
            </p>
            <p className="font-serif text-xl md:text-2xl text-[#F9F6F0]/90 mb-8 leading-relaxed">
              {physicalAddress}
            </p>
            <div className="flex flex-col gap-4 self-start">
              <a
                href={landlineCall}
                className="inline-flex items-center gap-3 border border-sand bg-transparent text-sand hover:bg-sand hover:text-charcoal px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300"
              >
                <Phone size={12} />
                Call Showroom: 06752-220037
              </a>
              <a
                href={alternateWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-raw-silk/30 bg-transparent text-raw-silk hover:border-raw-silk px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300"
              >
                Inquire via Mobile
                <ArrowUpRight size={12} />
              </a>
            </div>
            <span className="mt-8 font-sans text-[9px] text-[#F9F6F0]/40 tracking-wider flex items-center gap-2">
              <Compass size={12} />
              SWARGADWAR, PURI
            </span>
          </ScrollReveal>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Map Embed */}
          <ScrollReveal delay={100} className="lg:col-span-6 w-full z-10">
            <div className="border border-sand/20 aspect-video w-full bg-neutral-800 relative overflow-hidden rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.838501258674!2d85.81665427606399!3d20.182470781263593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c3fb45b5db3b%3A0xe54e6063b51b32d!2sSwargadwar%20Rd%2C%20Puri%2C%20Odisha!5e0!3m2!1sen!2sin!4v1719380000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puri Handloom Garden Location Map"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <OrnamentalDivider />

      {/* SECTION 10: DIRECT INQUIRY LEAD FORM */}
      <section id="inquiry" className="py-24 px-6 md:px-12 lg:px-24 border-b border-charcoal/5 bg-raw-silk">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header & Details */}
          <ScrollReveal className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-[10px] uppercase tracking-[0.25em] text-sand font-bold mb-4">
              SEND AN INQUIRY
            </span>
            <h2 className="font-serif text-3xl text-charcoal mb-4 font-normal">
              Ask About a <span className="text-sand font-medium italic">Product</span>
            </h2>
            <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed mb-8 max-w-sm">
              Have questions about a saree, kurti, or bed cover? Fill out the form below with your contact details, and we will get back to you with price and availability.
            </p>
            <div className="space-y-4">
              <a
                href={emailMailto}
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-charcoal font-semibold hover:text-sand transition-colors duration-300"
              >
                <Mail size={12} />
                rajeshmullick.puri@gmail.com
              </a>
              <div className="block">
                <a
                  href={landlineCall}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-charcoal font-semibold hover:text-sand transition-colors duration-300"
                >
                  <Phone size={12} />
                  06752-220037
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={100} className="lg:col-span-8">
            <form action="https://formspree.io/f/rajeshmullick.puri@gmail.com" method="POST" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-sand transition-all duration-300 rounded-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="WhatsApp Number"
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-sand transition-all duration-300 rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-sand transition-all duration-300 rounded-none"
                  />
                </div>
                <div>
                  <select
                    name="cluster_interest"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xs text-charcoal/70 placeholder-charcoal/40 focus:outline-none focus:border-sand transition-all duration-300 rounded-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select Weaving Cluster Interest
                    </option>
                    <option value="Sonpur Cluster (Sambalpuri Silk)">Sonpur Cluster (Sambalpuri Silk)</option>
                    <option value="Nuapatna Cluster (Khandua & Cotton)">Nuapatna Cluster (Khandua &amp; Cotton)</option>
                    <option value="Koraput Cluster (Kotpad Organic Dye)">Koraput Cluster (Kotpad Organic Dye)</option>
                    <option value="Ganjam Cluster (Bomkai Silk)">Ganjam Cluster (Bomkai Silk)</option>
                    <option value="Raghurajpur Cluster (Patachitra Paint)">Raghurajpur Cluster (Patachitra Paint)</option>
                    <option value="General Inventory Inquiry">General Inventory Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Your Weave Request (Please specify size or weave pattern if known)"
                  className="w-full bg-transparent border-b border-charcoal/20 py-4 text-xs text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-sand transition-all duration-300 rounded-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="border border-charcoal bg-charcoal text-raw-silk px-10 py-4 text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-sand hover:border-sand hover:text-charcoal transition-all duration-300 cursor-pointer"
              >
                Submit Registry Request
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
