import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import LottieAnimation from "@/components/LottieAnimation";

export const metadata = {
  title: "Our Story & Legacy | Puri Handloom Garden",
  description: "Learn how we support local weavers across Odisha. Sourcing authentic sarees and handwoven textiles directly from weaver cooperatives.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#F9F6F0] text-[#1C1A17] flex flex-col selection:bg-[#C2B280] selection:text-[#1C1A17] bg-grid-dots">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 md:px-12 lg:px-24 border-b border-[#1C1A17]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Title and Info (5 cols) */}
          <ScrollReveal className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-4">
              OUR STORY
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1A17] leading-[1.15] mb-6 font-normal">
              Preserving the Art of <span className="text-[#C2B280] font-medium italic">Traditional Handloom</span>.
            </h1>
            <p className="font-sans text-xs md:text-sm text-[#1C1A17]/70 leading-relaxed tracking-wide mb-8">
              Puri Handloom Garden is a trusted showroom dedicated to keeping Odisha&apos;s beautiful weaving traditions alive by bringing authentic handwoven fabrics directly to you.
            </p>
          </ScrollReveal>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Large Editorial Portrait (6 cols) */}
          <ScrollReveal delay={100} className="lg:col-span-6 w-full relative">
            <div className="aspect-[2/3] relative bg-neutral-200 overflow-hidden rounded-3xl">
              <Image
                src="/images/product_7.webp"
                alt="Traditional Odisha Handloom weaving process"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-[#F9F6F0] border border-[#1C1A17]/5 px-4 py-2 text-[9px] tracking-widest uppercase font-mono hidden md:block">
              TRADITIONAL ODISHA WEAVER
            </div>
          </ScrollReveal>

        </div>
      </section>

      <OrnamentalDivider />

      {/* Section 2: Core Philosophy */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-[#1C1A17]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left: Heading (4 cols) */}
          <ScrollReveal className="lg:col-span-4">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold block mb-4">
              CRAFT VALUES
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1C1A17] leading-[1.2] font-normal uppercase">
              Traditional Weaving <span className="text-[#C2B280] font-medium italic">Styles</span>.
            </h2>
          </ScrollReveal>

          {/* Right: Paragraphs (8 cols) */}
          <ScrollReveal delay={100} className="lg:col-span-8 flex flex-col gap-6 text-xs md:text-sm text-[#1C1A17]/75 leading-relaxed tracking-wide">
            <p>
              Each of our sarees and fabrics is crafted by hand using age-old techniques. Styles like the <strong>Sambalpuri Silk Ikat</strong> use a unique tie-and-dye method where the threads are colored in beautiful patterns before they are woven. Our weavers create these detailed designs entirely from memory, preserving skills passed down through generations.
            </p>
            <p>
              We focus on authentic handwoven quality rather than fast machine-made fabrics. A single traditional saree can take a weaver anywhere from two to five weeks of careful daily work. This makes each piece unique, durable, and exceptionally soft to the touch.
            </p>
          </ScrollReveal>

        </div>
      </section>

      <OrnamentalDivider />

      {/* Section 3: Socio-Economic Impact */}
      <section className="py-24 bg-[#1C1A17] text-[#F9F6F0] px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Left */}
          <ScrollReveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="aspect-[2/3] relative bg-neutral-800 rounded-3xl overflow-hidden">
              <Image
                src="/images/product_15.webp"
                alt="Weaving master showcasing handloom textiles"
                fill
                className="object-cover opacity-90 object-top"
              />
            </div>
          </ScrollReveal>

          <div className="hidden lg:block lg:col-span-1 order-2"></div>

          {/* Info Right */}
          <ScrollReveal delay={100} className="lg:col-span-5 order-1 lg:order-3 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-4">
              SUPPORTING LOCAL WEAVERS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F9F6F0] leading-tight mb-6 font-normal uppercase">
              Our Weaving <span className="text-[#C2B280] font-medium italic">Community</span>.
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#F9F6F0]/70 leading-relaxed tracking-wide mb-8">
              We buy directly from local weavers and traditional cooperatives across Odisha. By avoiding middle-men, we ensure that the weavers receive fair wages for their amazing work. Your purchase directly supports their families and helps keep their craft alive.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start border-l-2 border-[#C2B280] pl-4">
                <div>
                  <span className="font-serif text-sm text-[#F9F6F0] font-semibold">Direct From Weavers</span>
                  <p className="font-sans text-[11px] text-[#F9F6F0]/50 mt-1">We buy directly from weavers so they get the full value of their hard work.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start border-l-2 border-[#C2B280] pl-4">
                <div>
                  <span className="font-serif text-sm text-[#F9F6F0] font-semibold">Keeping Traditions Alive</span>
                  <p className="font-sans text-[11px] text-[#F9F6F0]/50 mt-1">We support the use of natural cotton, silk, and traditional wooden looms.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <OrnamentalDivider />

      {/* Section 4: Showroom */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center">
        <ScrollReveal className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-4">
            VISIT OUR SHOWROOM
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#1C1A17] mb-6 uppercase font-normal">
            Come Visit Us in <span className="text-[#C2B280] font-medium italic">Puri</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/70 leading-relaxed tracking-wide mb-8">
            Visit our showroom at Swargadwar Square in Puri to explore our collection in person. Feel the softness of our pure silks, check the quality of our handloom cottons, and choose the perfect designs for your wardrobe.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#1C1A17] px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-[#1C1A17] hover:text-[#F9F6F0] transition-colors duration-300"
          >
            <span>Showroom Directions</span>
            <ArrowUpRight size={12} />
          </Link>
        </ScrollReveal>
      </section>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
