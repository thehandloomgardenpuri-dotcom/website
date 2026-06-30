"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageSquare, Maximize2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory } from "@/data/products";

export default function KurtisCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeProductTitle, setActiveProductTitle] = useState<string>("");
  const [activeProductId, setActiveProductId] = useState<string>("");

  const kurtiProducts = getProductsByCategory("kurtis");

  const handleOpenLightbox = (image: string, title: string, id: string) => {
    setActiveImage(image);
    setActiveProductTitle(title);
    setActiveProductId(id);
  };

  const handleCloseLightbox = () => {
    setActiveImage(null);
  };

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
              Kurtis &amp;{" "}
              <span className="italic text-maroon">Readymade Wear</span>
            </h1>
          </div>
          <p className="font-sans text-sm text-charcoal/60 max-w-md leading-relaxed">
            Beautiful traditional styles made for everyday wear. Click any image to view details.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {kurtiProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Kurti: ${product.title} (Product Code: ${product.id}). Please let know the available sizes and price.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 4) * 100} className="flex flex-col group card-hover">
                <div className="w-full aspect-[2/3] relative bg-cream-dark rounded-lg overflow-hidden mb-5 img-zoom">
                  <Link href={`/product/${product.id}`} className="block w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </Link>
                  <div className="absolute top-3 left-3 bg-maroon/90 backdrop-blur-sm text-cream px-3 py-1 text-[8px] tracking-widest uppercase font-bold rounded-full pointer-events-none">
                    {product.id}
                  </div>
                  <button
                    onClick={() => handleOpenLightbox(product.image, product.title, product.id)}
                    className="absolute bottom-3 right-3 bg-white/90 text-charcoal p-2 hover:bg-maroon hover:text-cream transition-all duration-300 rounded-full shadow-md cursor-pointer z-10"
                    aria-label={`View larger image of ${product.title}`}
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>

                <div className="mb-2">
                  <span className="font-sans text-[9px] text-maroon tracking-widest uppercase block mb-1 font-bold">
                    {product.cluster}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h2 className="font-serif text-base text-charcoal leading-tight group-hover:text-maroon transition-colors">
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
                  className="mt-auto btn-maroon justify-center w-full text-[10px]"
                >
                  <span>Inquire on WhatsApp</span>
                  <MessageSquare size={12} />
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex flex-col justify-center items-center p-6 md:p-12">
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-cream hover:text-gold transition-colors p-2 cursor-pointer z-[55]"
            aria-label="Close details"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-2xl aspect-[2/3] max-h-[75vh] bg-charcoal rounded-lg overflow-hidden mb-6">
            <Image
              src={activeImage}
              alt={activeProductTitle}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="text-center w-full max-w-md">
            <span className="font-sans text-[9px] text-gold tracking-widest uppercase block mb-1 font-bold">
              {activeProductId}
            </span>
            <h3 className="font-serif text-xl text-cream mb-4">
              {activeProductTitle}
            </h3>
            <a
              href={`${primaryWhatsAppBase}${encodeURIComponent(
                `Hi Handloom Garden, I am looking at ${activeProductTitle} (${activeProductId}) and would like to ask about price and sizes.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-charcoal hover:bg-gold-light px-8 py-3.5 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 cursor-pointer"
            >
              WhatsApp Inquiry
              <MessageSquare size={12} />
            </a>
          </div>
        </div>
      )}

      <WhatsAppWidget />
      <Footer />
    </div>
  );
}
