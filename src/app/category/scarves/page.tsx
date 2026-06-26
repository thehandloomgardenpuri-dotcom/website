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
              Dupattas, Scarves &amp;{" "}
              <span className="italic text-maroon">Stoles</span>
            </h1>
          </div>
          <p className="font-sans text-sm text-charcoal/60 max-w-md leading-relaxed">
            Beautiful handwoven pieces that add a traditional touch to any outfit. Perfect souvenir gifts from Puri.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scarfProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Scarf: ${product.title} (Product Code: ${product.id}). Please tell me color choices and price.`
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

                <div className="mb-2">
                  <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block mb-1 font-bold">
                    {product.cluster}
                  </span>
                  <h2 className="font-serif text-lg text-charcoal leading-tight group-hover:text-maroon transition-colors">
                    {product.title}
                  </h2>
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
