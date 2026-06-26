import Image from "next/image";
import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sarees Collection | Puri Handloom Garden",
  description: "Browse our collection of authentic Odisha handwoven sarees. Silk Ikats, comfortable cottons, and traditional designs directly from local weavers.",
};

export default function SareesCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";

  const sareeProducts = [
    {
      id: "PHG-SAR-001",
      title: "Sambalpuri Silk Ikat Saree",
      cluster: "Bargarh District",
      image: "/images/product_11.webp",
      desc: "Beautiful double-ikat silk saree featuring traditional geometric patterns. Hand-dyed using natural colors before weaving.",
      spec: "Pure Silk • 5.5 Meters • Matching borders",
    },
    {
      id: "PHG-SAR-002",
      title: "Bomkai Cotton & Silk Saree",
      cluster: "Ganjam District",
      image: "/images/product_9.webp",
      desc: "Distinct thread work detailing traditional borders and pallu patterns inspired by local folklore.",
      spec: "Silk-Cotton Blend • Handwoven quality",
    },
    {
      id: "PHG-SAR-003",
      title: "Patachitra Painted Saree",
      cluster: "Raghurajpur Village",
      image: "/images/product_8.webp",
      desc: "Traditional mythological stories hand-painted onto pure tussar silk using natural colors.",
      spec: "Pure Tussar Silk • Hand-Painted art",
    },
    {
      id: "PHG-SAR-004",
      title: "Nuapatna Gita Govinda Saree",
      cluster: "Nuapatna Village",
      image: "/images/product_12.webp",
      desc: "Traditional silk saree woven with sacred verses from the Gita Govinda, used for temple rituals in Puri.",
      spec: "Mulberry Silk • Natural Yellow Dyes",
    },
    {
      id: "PHG-SAR-005",
      title: "Traditional Sonpur Silk Saree",
      cluster: "Sonpur District",
      image: "/images/product_1.webp",
      desc: "Classic wedding-weight Odia silk. Renowned for its rich border contrast and structured temple patterns.",
      spec: "Pure Silk • Elegant Gold borders",
    },
    {
      id: "PHG-SAR-006",
      title: "Kotpad Organic Cotton Saree",
      cluster: "Koraput District",
      image: "/images/product_10.webp",
      desc: "Thick, comfortable organic cotton dyed using natural roots. Woven slowly by local tribal weavers.",
      spec: "Organic Cotton • Natural Root Dyes",
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
              Handwoven <span className="text-[#C2B280] font-medium italic">Sarees</span>
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/60 max-w-md leading-relaxed tracking-wide">
            A beautiful selection of authentic sarees sourced directly from local master weavers of Odisha. Every purchase supports weaver families and keeps our heritage alive.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {sareeProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Saree: ${product.title} (Product Code: ${product.id}). Please let me know its price and availability.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 3) * 100} className="flex flex-col group">
                {/* Visual Frame */}
                <div className="w-full aspect-[2/3] relative bg-neutral-100 rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top transform group-hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1A17]/70 backdrop-blur-md text-[#F9F6F0] px-3 py-1.5 text-[8px] tracking-widest uppercase font-mono rounded-full">
                    {product.id}
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-mono text-[8px] text-[#C2B280] tracking-widest uppercase block mb-1">
                      {product.cluster}
                    </span>
                    <h2 className="font-serif text-lg text-[#1C1A17] font-normal leading-tight group-hover:text-[#C2B280] transition-colors">
                      {product.title}
                    </h2>
                  </div>
                </div>

                <p className="font-sans text-xs text-[#1C1A17]/70 leading-relaxed tracking-wide mb-4">
                  {product.desc}
                </p>

                <div className="border-t border-[#1C1A17]/5 pt-3 mb-6 flex justify-between items-center text-[9px] font-mono text-[#1C1A17]/40 tracking-wider">
                  <span>{product.spec}</span>
                </div>

                {/* WhatsApp Inquiry Link */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-between border border-[#1C1A17] bg-[#1C1A17] text-[#F9F6F0] hover:bg-[#C2B280] hover:border-[#C2B280] hover:text-[#1C1A17] px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 w-full rounded-none"
                >
                  <span>Inquire on WhatsApp</span>
                  <MessageSquare size={12} />
                </a>
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
