import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Our Story & Legacy | Puri Handloom Garden",
  description: "Learn how we support local weavers across Odisha. Sourcing authentic sarees and handwoven textiles directly from weaver cooperatives.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold mb-3">
              Our Story
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-[1.15] mb-6">
              Preserving the Art of{" "}
              <span className="italic text-maroon">Traditional Handloom</span>.
            </h1>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
              Puri Handloom Garden is a trusted showroom dedicated to keeping Odisha&apos;s beautiful weaving traditions alive by bringing authentic handwoven fabrics directly to you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="relative">
            <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-xl img-zoom">
              <Image
                src="/images/product_7.webp"
                alt="Traditional Odisha Handloom weaving process"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-cream-dark/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold block mb-3">
              Craft Values
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">
              Traditional Weaving{" "}
              <span className="italic text-maroon">Styles</span>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100} className="lg:col-span-8 flex flex-col gap-6 text-sm text-charcoal/70 leading-relaxed">
            <p>
              Each of our sarees and fabrics is crafted by hand using age-old techniques. Styles like the <strong className="text-charcoal">Sambalpuri Silk Ikat</strong> use a unique tie-and-dye method where the threads are colored in beautiful patterns before they are woven.
            </p>
            <p>
              We focus on authentic handwoven quality rather than fast machine-made fabrics. A single traditional saree can take a weaver anywhere from two to five weeks of careful daily work. This makes each piece unique, durable, and exceptionally soft to the touch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Supporting Local Weavers */}
      <section className="py-20 bg-maroon text-cream px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="order-2 lg:order-1">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-xl img-zoom">
              <Image
                src="/images/product_15.webp"
                alt="Weaving master showcasing handloom textiles"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100} className="order-1 lg:order-2 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-3">
              Supporting Local Weavers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6">
              Our Weaving{" "}
              <span className="italic text-gold">Community</span>.
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed mb-8">
              We buy directly from local weavers and traditional cooperatives across Odisha. By avoiding middle-men, we ensure that the weavers receive fair wages for their amazing work.
            </p>
            
            <div className="space-y-4">
              <div className="border-l-2 border-gold pl-4">
                <span className="font-serif text-sm text-white font-semibold">Direct From Weavers</span>
                <p className="font-sans text-[11px] text-white/50 mt-1">We buy directly from weavers so they get the full value of their hard work.</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <span className="font-serif text-sm text-white font-semibold">Keeping Traditions Alive</span>
                <p className="font-sans text-[11px] text-white/50 mt-1">We support the use of natural cotton, silk, and traditional wooden looms.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visit Showroom CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-20 text-center bg-cream">
        <ScrollReveal className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold mb-3">
            Visit Our Showroom
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
            Come Visit Us in{" "}
            <span className="italic text-maroon">Puri</span>
          </h2>
          <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8">
            Visit our showroom at Swargadwar Square in Puri to explore our collection in person. Feel the softness of our pure silks and choose the perfect designs for your wardrobe.
          </p>
          <Link href="/contact" className="btn-maroon">
            Showroom Directions
            <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
