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
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* Page Title Section */}
      <section className="pt-16 pb-10 px-6 md:px-12 lg:px-20 border-b border-charcoal/5">
        <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-maroon font-bold mb-2 block">
              Our Collections
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight">
              Handwoven{" "}
              <span className="italic text-maroon">Sarees</span>
            </h1>
          </div>
          <p className="font-sans text-sm text-charcoal/60 max-w-md leading-relaxed">
            A beautiful selection of authentic sarees sourced directly from local master weavers of Odisha.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {sareeProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Saree: ${product.title} (Product Code: ${product.id}). Please let me know its price and availability.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 3) * 100} className="flex flex-col group card-hover">
                <div className="w-full aspect-[3/4] relative bg-cream-dark rounded-lg overflow-hidden mb-5 img-zoom">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-maroon/90 backdrop-blur-sm text-cream px-3 py-1 text-[8px] tracking-widest uppercase font-bold rounded-full">
                    {product.id}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block mb-1 font-bold">
                      {product.cluster}
                    </span>
                    <h2 className="font-serif text-lg text-charcoal leading-tight group-hover:text-maroon transition-colors">
                      {product.title}
                    </h2>
                  </div>
                </div>

                <p className="font-sans text-xs text-charcoal/60 leading-relaxed mb-3">
                  {product.desc}
                </p>

                <div className="border-t border-charcoal/5 pt-3 mb-5 text-[9px] font-sans text-charcoal/40 tracking-wider">
                  {product.spec}
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn-maroon justify-center w-full"
                >
                  <span>Inquire on WhatsApp</span>
                  <MessageSquare size={14} />
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
