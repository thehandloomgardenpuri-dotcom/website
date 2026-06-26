import Image from "next/image";
import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Dupattas, Scarves & Stoles | Puri Handloom Garden",
  description: "Browse our collection of authentic handwoven stoles, dupattas, and scarves. Lightweight traditional handicrafts ideal for gifting.",
};

export default function ScarvesCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";

  const scarfProducts = [
    {
      id: "PHG-SCF-001",
      title: "Ganjam Silk Stole",
      cluster: "Ganjam District",
      image: "/images/product_2.webp",
      desc: "Delicate, lightweight handloom silk dupatta with subtle gold highlights along borders. A beautiful gift or traditional accessory.",
      spec: "100% Ganjam Silk • 2.2 Meters • Soft fabric",
    },
    {
      id: "PHG-SCF-002",
      title: "Handwoven Cotton Ikat Scarf",
      cluster: "Bargarh District",
      image: "/images/product_15.webp",
      desc: "Comfortable cotton stole with traditional patterns. Soft, durable, and highly breathable, perfect for warm weather.",
      spec: "Pure Cotton • 1.8 Meters • Handwoven",
    },
    {
      id: "PHG-SCF-003",
      title: "Jodo & Temple Calligraphy Stole",
      cluster: "Nuapatna Cooperatives",
      image: "/images/product_22.webp",
      desc: "Traditional style scarf featuring calligraphic motifs and red accent borders.",
      spec: "100% Silk-Cotton • Natural Dye Accents",
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
              Dupattas, Scarves &amp; <span className="text-[#C2B280] font-medium italic">Stoles</span>
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/60 max-w-md leading-relaxed tracking-wide">
            Beautiful handwoven pieces that add a traditional touch to any outfit. Lightweight, comfortable, and perfect souvenir gifts from Puri.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scarfProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Scarf: ${product.title} (Product Code: ${product.id}). Please tell me color choices and price.`
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
