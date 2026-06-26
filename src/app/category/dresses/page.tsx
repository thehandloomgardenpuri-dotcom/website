import Image from "next/image";
import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Dress Materials & Unstitched Sets | Puri Handloom Garden",
  description: "Browse our authentic ethnic dress materials and unstitched sets. Hand-crafted using traditional Sambalpuri and Nuapatna weave patterns.",
};

export default function DressesCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";

  const dressProducts = [
    {
      id: "PHG-DRS-001",
      title: "Nuapatna Woven Dress Material",
      cluster: "Nuapatna Village",
      image: "/images/product_3.webp",
      desc: "Three-piece unstitched set with beautiful handwoven patterns. Comes with matching dupattas and bottom panels.",
      spec: "Top (2.5m), Bottom (2m), Dupatta (2.2m) • Soft Cotton",
    },
    {
      id: "PHG-DRS-002",
      title: "Sambalpuri Cotton Dress Set",
      cluster: "Bargarh District",
      image: "/images/product_20.webp",
      desc: "Comfortable unstitched cotton set. Features traditional double-ikat details and geometric designs.",
      spec: "100% Cotton • Natural dye accents • Long-lasting quality",
    },
    {
      id: "PHG-DRS-003",
      title: "Khandua Silk Dress Set",
      cluster: "Nuapatna Cooperatives",
      image: "/images/product_21.webp",
      desc: "Beautiful unstitched dress set featuring traditional borders on soft, shiny mulberry silk.",
      spec: "Pure Silk • High-quality weave • Zari borders",
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
              Dress Materials &amp; <span className="text-[#C2B280] font-medium italic">Sets</span>
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/60 max-w-md leading-relaxed tracking-wide">
            Unstitched sets and running materials sourced directly from traditional weaver cooperatives in Odisha. Choose your design and stitch it your way.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dressProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Dress Set: ${product.title} (Product Code: ${product.id}). Please tell me price and color choices.`
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
                    loading="lazy"
                    className="object-cover object-top transform group-hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1A17]/70 backdrop-blur-md text-[#F9F6F0] px-3 py-1.5 text-[8px] tracking-widest uppercase font-mono rounded-full">
                    {product.id}
                  </div>
                </div>

                {/* Meta details */}
                <div className="mb-2">
                  <span className="font-mono text-[8px] text-[#C2B280] tracking-widest uppercase block mb-1">
                    {product.cluster}
                  </span>
                  <h2 className="font-serif text-lg text-[#1C1A17] font-normal leading-tight group-hover:text-[#C2B280] transition-colors">
                    {product.title}
                  </h2>
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
