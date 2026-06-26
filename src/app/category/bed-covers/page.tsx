import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";
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
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* Page Title */}
      <section className="pt-16 pb-10 px-6 md:px-12 lg:px-20 border-b border-charcoal/5">
        <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold mb-2 block">
              Our Collections
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              Bed Covers &amp;{" "}
              <span className="italic text-maroon">Home Textiles</span>
            </h1>
          </div>
          <p className="font-sans text-sm text-charcoal/60 max-w-md leading-relaxed">
            Comfortable, handwoven cotton bedspreads that bring traditional Odia patterns to your home.
          </p>
        </ScrollReveal>
      </section>

      {/* Product Listings */}
      <section className="py-16 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {bedCoverProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Bed Cover: ${product.title} (Product Code: ${product.id}). Please let me know price and size availability.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 2) * 100} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-charcoal/5 pb-12 last:border-0 last:pb-0">
                <div className="md:col-span-5 w-full aspect-[3/4] relative bg-cream-dark rounded-lg overflow-hidden img-zoom shadow-md">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-maroon/90 backdrop-blur-sm text-cream px-3 py-1 text-[8px] tracking-widest uppercase font-bold rounded-full">
                    {product.id}
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col justify-center">
                  <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block mb-1 font-bold">
                    {product.cluster}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl text-charcoal leading-tight mb-3">
                    {product.title}
                  </h2>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-5">
                    {product.desc}
                  </p>

                  <div className="space-y-2 mb-6 text-xs font-sans text-charcoal/60">
                    <div className="flex justify-between border-b border-charcoal/5 pb-2">
                      <span className="text-charcoal/40 uppercase text-[9px]">Sizing options</span>
                      <span>{product.sizes}</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/5 pb-2">
                      <span className="text-charcoal/40 uppercase text-[9px]">Fabric</span>
                      <span>{product.composition}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-maroon flex-1 justify-center"
                    >
                      <span>Inquire on WhatsApp</span>
                      <MessageSquare size={14} />
                    </a>
                    <Link
                      href="/contact#inquiry"
                      className="btn-outline-maroon flex-1 justify-center"
                    >
                      <span>Custom Size</span>
                      <ArrowRight size={14} />
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
