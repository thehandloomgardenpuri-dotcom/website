import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Bed Covers & Home Textiles | Puri Handloom Garden",
  description: "Explore our collection of authentic handwoven bed covers. Available in Single, Double, and King sizes, woven with comfortable organic cotton.",
};

export default function BedCoversCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";

  const bedCoverProducts = [
    {
      id: "PHG-COV-001",
      title: "Kotpad Heavy Cotton Bed Cover",
      cluster: "Koraput District",
      image: "/images/product_5.webp",
      desc: "Thick, comfortable organic cotton dyed using natural roots. Highly durable handwoven texture with traditional borders.",
      sizes: "Single (60\" x 90\"), Double (90\" x 108\")",
      composition: "100% Organic Cotton • Natural Dyes",
    },
    {
      id: "PHG-COV-002",
      title: "Sambalpuri Ikat Bed Cover",
      cluster: "Bargarh District",
      image: "/images/product_10.webp",
      desc: "Beautiful ikat patterns featuring geometric lines and traditional central designs. Very soft cotton fabric.",
      sizes: "Double (90\" x 108\"), King (108\" x 108\")",
      composition: "100% Pure Cotton • Traditional Dye",
    },
    {
      id: "PHG-COV-003",
      title: "Nuapatna Woven Summer Bed Cover",
      cluster: "Nuapatna Village",
      image: "/images/product_18.webp",
      desc: "Lightweight bedspread with fine woven textures. Soft and comfortable, ideal for warm weather.",
      sizes: "Single (60\" x 90\"), Double (90\" x 100\")",
      composition: "Pure Handspun Cotton • Handwoven",
    },
    {
      id: "PHG-COV-004",
      title: "Ganjam Chevron Accent Bedspread",
      cluster: "Ganjam District",
      image: "/images/product_19.webp",
      desc: "Features beautiful handwoven chevron patterns. Adds a nice traditional touch to your home decor.",
      sizes: "Double (90\" x 108\")",
      composition: "Cotton-Linen Weave • Textured Finish",
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#F9F6F0] text-[#1C1A17] flex flex-col selection:bg-[#C2B280] selection:text-[#1C1A17] bg-grid-dots">
      <Header />

      {/* Page Title Section */}
      <section className="pt-20 pb-12 px-6 md:px-12 lg:px-24 border-b border-[#1C1A17]/5">
        <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#C2B280] font-bold mb-3 block">
              OUR COLLECTIONS
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1C1A17] leading-tight font-normal uppercase">
              Bed Covers &amp; <span className="text-[#C2B280] font-medium italic">Home Textiles</span>
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/60 max-w-md leading-relaxed tracking-wide">
            Comfortable, handwoven cotton bedspreads that bring traditional Odia patterns to your home. Sourced directly from local weaver families.
          </p>
        </ScrollReveal>
      </section>

      {/* Product Listings Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {bedCoverProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Bed Cover: ${product.title} (Product Code: ${product.id}). Please let me know price and size availability.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 2) * 100} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-[#1C1A17]/5 pb-12 last:border-0 last:pb-0">
                {/* Visual Frame (5 cols) */}
                <div className="md:col-span-5 w-full aspect-[2/3] relative bg-neutral-100 rounded-3xl overflow-hidden shadow-none">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1A17]/70 backdrop-blur-md text-[#F9F6F0] px-3 py-1.5 text-[8px] tracking-widest uppercase font-mono rounded-full">
                    {product.id}
                  </div>
                </div>

                {/* Meta details (7 cols) */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="font-mono text-[8px] text-[#C2B280] tracking-widest uppercase block mb-1">
                    {product.cluster}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl text-[#1C1A17] font-normal leading-tight mb-4">
                    {product.title}
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#1C1A17]/70 leading-relaxed tracking-wide mb-6">
                    {product.desc}
                  </p>

                  <div className="space-y-3 mb-8 text-[11px] font-mono text-[#1C1A17]/60 tracking-wider">
                    <div className="flex justify-between border-b border-[#1C1A17]/5 pb-2">
                      <span className="text-[#1C1A17]/40 uppercase text-[9px]">Sizing options</span>
                      <span>{product.sizes}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#1C1A17]/5 pb-2">
                      <span className="text-[#1C1A17]/40 uppercase text-[9px]">Fabric Composition</span>
                      <span>{product.composition}</span>
                    </div>
                  </div>

                  {/* Direct Inquiry Routes */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-[#1C1A17] bg-[#1C1A17] text-[#F9F6F0] hover:bg-[#C2B280] hover:border-[#C2B280] hover:text-[#1C1A17] px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 flex-grow"
                    >
                      <span>Inquire on WhatsApp</span>
                      <MessageSquare size={12} />
                    </a>
                    <Link
                      href="/contact#inquiry"
                      className="inline-flex items-center justify-center gap-1 border border-[#1C1A17]/10 bg-transparent text-[#1C1A17] hover:border-[#1C1A17] px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300"
                    >
                      <span>Custom Size</span>
                      <ArrowDown size={11} />
                    </Link>
                  </div>

                </div>
                </ScrollReveal>
            );
          })}
        </div>
      </section>

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
