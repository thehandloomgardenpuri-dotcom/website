import Image from "next/image";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory } from "@/data/products";

export const metadata = {
  title: "Dress Materials & Unstitched Sets | Puri Handloom Garden",
  description: "Browse our authentic ethnic dress materials and unstitched sets. Hand-crafted using traditional Sambalpuri and Nuapatna weave patterns.",
};

export default function DressesCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937937653?text=";
  const dressProducts = getProductsByCategory("dresses");

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
              Dress Materials &amp;{" "}
              <span className="italic text-maroon">Sets</span>
            </h1>
          </div>
          <p className="font-sans text-sm text-charcoal/60 max-w-md leading-relaxed">
            Unstitched sets and running materials sourced directly from traditional weaver cooperatives in Odisha.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {dressProducts.map((product, index) => {
            const imageUrl = `https://www.handloomgarden.com${product.image}`;
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Dress Set: ${product.title} (Product Code: ${product.id}).\n\nImage: ${imageUrl}\n\nPlease tell me price and color choices.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 3) * 100} className="flex flex-col group card-hover">
                <Link href={`/product/${product.id}`}>
                  <div className="w-full aspect-[2/3] relative bg-cream-dark rounded-lg overflow-hidden mb-5 img-zoom">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      loading="lazy"
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-maroon/90 backdrop-blur-sm text-cream px-3 py-1 text-[8px] tracking-widest uppercase font-bold rounded-full">
                      {product.id}
                    </div>
                  </div>
                </Link>

                <div className="mb-2">
                  <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block mb-1 font-bold">
                    {product.cluster}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h2 className="font-serif text-lg text-charcoal leading-tight group-hover:text-maroon transition-colors">
                      {product.title}
                    </h2>
                  </Link>
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
