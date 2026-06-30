"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ChevronRight, Check, MapPin, Truck, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import { Product } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";
  const isSilk =
    product.title.toLowerCase().includes("silk") ||
    product.spec?.toLowerCase().includes("silk") ||
    (product.composition && product.composition.toLowerCase().includes("silk"));

  const encodedText = encodeURIComponent(
    `Hi Handloom Garden, I am interested in the product: ${product.title} (Product Code: ${product.id}). Please share price, size options, and shipping details.`
  );
  const waLink = `${primaryWhatsAppBase}${encodedText}`;

  // Parse specifications into lists if applicable
  const specsList = product.spec ? product.spec.split("•").map((s) => s.trim()) : [];

  return (
    <div className="relative min-h-screen bg-cream text-charcoal flex flex-col">
      <Header />

      {/* Breadcrumb Navigation */}
      <nav className="pt-20 sm:pt-24 pb-4 px-4 sm:px-6 md:px-12 lg:px-20 bg-cream border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-charcoal/50">
          <Link href="/" className="hover:text-maroon transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href={`/category/${product.category}`} className="hover:text-maroon transition-colors capitalize">
            {product.category.replace("-", " ")}
          </Link>
          <ChevronRight size={12} />
          <span className="text-charcoal font-medium truncate max-w-[200px] md:max-w-none">{product.title}</span>
        </div>
      </nav>

      {/* Main Product Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 w-full relative">
            <ScrollReveal direction="left" className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl border border-charcoal/5 bg-cream-dark img-zoom">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-maroon text-cream px-4 py-1.5 text-[9px] tracking-widest uppercase font-bold rounded-full shadow-md">
                {product.id}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Product Info & CTA */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={100} className="flex flex-col">
              
              {/* Cluster and Category Tags */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[10px] text-maroon tracking-widest uppercase font-bold bg-maroon/5 px-3 py-1 rounded-sm">
                  {product.cluster}
                </span>
                <span className="font-sans text-[10px] text-charcoal/50 tracking-widest uppercase font-semibold">
                  Handloom {product.category.replace("-", " ")}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-6 font-normal">
                {product.title}
              </h1>

              {/* Elegant divider */}
              <div className="flex items-center gap-3 mb-6">
                <span className="ornament-line" />
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-gold">
                  <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="currentColor" />
                </svg>
                <span className="ornament-line" />
              </div>

              {/* Description */}
              <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed mb-8">
                {product.desc}
              </p>

              {/* Product Specifications / Attributes */}
              <div className="bg-cream-dark/30 rounded-xl p-6 border border-charcoal/5 mb-8">
                <h3 className="font-serif text-sm font-bold text-charcoal uppercase tracking-wider mb-4 border-b border-charcoal/5 pb-2">
                  Product Details
                </h3>
                
                {product.category === "bed-covers" ? (
                  <div className="space-y-3 text-xs font-sans">
                    <div className="flex justify-between py-1 border-b border-charcoal/5">
                      <span className="text-charcoal/40 uppercase text-[9px] tracking-wider">Sizes Available</span>
                      <span className="font-medium text-charcoal">{product.sizes}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-charcoal/5">
                      <span className="text-charcoal/40 uppercase text-[9px] tracking-wider">Composition</span>
                      <span className="font-medium text-charcoal">{product.composition}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-charcoal/5">
                      <span className="text-charcoal/40 uppercase text-[9px] tracking-wider">Loom Origin</span>
                      <span className="font-medium text-charcoal">{product.cluster}</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specsList.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-maroon/5 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-maroon" />
                        </div>
                        <span className="font-sans text-xs text-charcoal/80 font-medium">{spec}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-maroon/5 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-maroon" />
                      </div>
                      <span className="font-sans text-xs text-charcoal/80 font-medium">{product.cluster} origin</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Silk Mark Certified Badge */}
              {isSilk && (
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gold/30 shadow-sm mb-8 animate-fade-in max-w-sm">
                  <div className="relative w-12 h-12 shrink-0 bg-white rounded-full border border-gold flex items-center justify-center overflow-hidden">
                    <Image
                      src="/silkmark.png"
                      alt="Silk Mark Logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-sm font-bold text-charcoal block">SILK MARK CERTIFIED</span>
                    <span className="font-sans text-[9px] text-maroon tracking-wider uppercase font-bold block">100% Pure Silk Guarantee</span>
                  </div>
                </div>
              )}

              {/* Call-to-Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-maroon btn-maroon-glow flex-1 justify-center py-4"
                >
                  <MessageSquare size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="btn-outline-maroon flex-1 justify-center py-4"
                >
                  <span>Book Store Visit</span>
                </Link>
              </div>

              {/* Store Logistics Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-charcoal/5 pt-6 text-xs font-sans text-charcoal/60">
                <div className="flex items-center gap-2.5">
                  <Truck size={16} className="text-maroon shrink-0" />
                  <span>Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw size={16} className="text-maroon shrink-0" />
                  <span>Artisanal Quality Check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={16} className="text-maroon shrink-0" />
                  <span>Swargadwar, Puri</span>
                </div>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-cream-dark/30 border-t border-charcoal/5">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-maroon font-bold mb-2 block">
                More From Collections
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide">
                You May Also Like
              </h2>
              <div className="ornament-line-wide mt-3" />
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {relatedProducts.map((p, idx) => (
                <ScrollReveal key={p.id} delay={idx * 100} className="flex flex-col group card-hover">
                  <Link href={`/product/${p.id}`}>
                    <div className="w-full aspect-[2/3] relative bg-cream rounded-lg overflow-hidden mb-4 img-zoom shadow-sm">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-maroon/90 backdrop-blur-sm text-cream px-2.5 py-0.5 text-[8px] tracking-widest uppercase font-bold rounded-full">
                        {p.id}
                      </div>
                    </div>
                  </Link>

                  <div className="mb-1">
                    <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block font-bold mb-0.5">
                      {p.cluster}
                    </span>
                    <Link href={`/product/${p.id}`}>
                      <h3 className="font-serif text-sm text-charcoal font-semibold leading-tight group-hover:text-maroon transition-colors truncate">
                        {p.title}
                      </h3>
                    </Link>
                  </div>
                  <p className="font-sans text-[11px] text-charcoal/50 leading-relaxed mb-3 line-clamp-2">
                    {p.desc}
                  </p>
                  <Link
                    href={`/product/${p.id}`}
                    className="mt-auto text-[10px] font-sans font-bold tracking-wider uppercase text-maroon hover:text-gold transition-colors flex items-center gap-1 self-start"
                  >
                    View Details
                    <ChevronRight size={12} />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
