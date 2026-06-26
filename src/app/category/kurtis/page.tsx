"use client";

import { useState } from "react";
import Image from "next/image";
import { X, MessageSquare, Maximize2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollReveal from "@/components/ScrollReveal";

export default function KurtisCategoryPage() {
  const primaryWhatsAppBase = "https://wa.me/919937157653?text=";
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeProductTitle, setActiveProductTitle] = useState<string>("");
  const [activeProductId, setActiveProductId] = useState<string>("");

  const kurtiProducts = [
    {
      id: "PHG-KRT-001",
      title: "Maniabandha Ikat Kurti",
      cluster: "Maniabandha Village",
      image: "/images/product_4.webp",
      desc: "Beautiful handwoven cotton kurti featuring traditional floral borders and fish-scale designs.",
      spec: "Handloom Cotton • Comfortable fit",
    },
    {
      id: "PHG-KRT-002",
      title: "Hand-Block Printed Kurti",
      cluster: "Nuapatna Cooperatives",
      image: "/images/product_14.webp",
      desc: "Traditional block-print detailing along the neckline. Woven with lightweight cotton, perfect for hot weather.",
      spec: "Pure Cotton • Natural Colors",
    },
    {
      id: "PHG-KRT-003",
      title: "Bomkai Pattern Accent Kurti",
      cluster: "Ganjam District",
      image: "/images/product_16.webp",
      desc: "Features intricate traditional Bomkai borders on the sleeves and neckline. Woven on a local wooden loom.",
      spec: "Cotton-Silk Blend • Traditional Weave",
    },
    {
      id: "PHG-KRT-004",
      title: "Sambalpuri Stripe Weave Kurti",
      cluster: "Bargarh District",
      image: "/images/product_17.webp",
      desc: "Simple, elegant kurti with handwoven stripes and subtle borders.",
      spec: "100% Cotton • Soft & Breathable",
    }
  ];

  const handleOpenLightbox = (image: string, title: string, id: string) => {
    setActiveImage(image);
    setActiveProductTitle(title);
    setActiveProductId(id);
  };

  const handleCloseLightbox = () => {
    setActiveImage(null);
  };

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
              Kurtis &amp; <span className="text-[#C2B280] font-medium italic">Readymade Wear</span>
            </h1>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#1C1A17]/60 max-w-md leading-relaxed tracking-wide">
            Beautiful traditional styles made for everyday wear. Click any image to view details and ask about size options on WhatsApp.
          </p>
        </ScrollReveal>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kurtiProducts.map((product, index) => {
            const encodedText = encodeURIComponent(
              `Hi Handloom Garden, I am interested in the Kurti: ${product.title} (Product Code: ${product.id}). Please let me know the available sizes and price.`
            );
            const waLink = `${primaryWhatsAppBase}${encodedText}`;

            return (
              <ScrollReveal key={product.id} delay={(index % 4) * 100} className="flex flex-col group">
                {/* Visual Frame */}
                <div className="w-full aspect-[2/3] relative bg-neutral-100 rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top transform group-hover:scale-103 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#1C1A17]/70 backdrop-blur-md text-[#F9F6F0] px-3 py-1.5 text-[8px] tracking-widest uppercase font-mono rounded-full">
                    {product.id}
                  </div>
                  
                  {/* Lightbox Trigger overlay */}
                  <button
                    onClick={() => handleOpenLightbox(product.image, product.title, product.id)}
                    className="absolute bottom-4 right-4 bg-[#F9F6F0]/90 text-[#1C1A17] p-2 hover:bg-[#C2B280] hover:text-[#1C1A17] transition-all duration-300 rounded-full shadow-md cursor-pointer"
                    aria-label={`View larger image of ${product.title}`}
                  >
                    <Maximize2 size={14} />
                  </button>
                </div>

                {/* Meta details */}
                <div className="mb-2">
                  <span className="font-mono text-[8px] text-[#C2B280] tracking-widest uppercase block mb-1">
                    {product.cluster}
                  </span>
                  <h2 className="font-serif text-base text-[#1C1A17] font-normal leading-tight group-hover:text-[#C2B280] transition-colors">
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
                  className="mt-auto inline-flex items-center justify-between border border-[#1C1A17] bg-[#1C1A17] text-[#F9F6F0] hover:bg-[#C2B280] hover:border-[#C2B280] hover:text-[#1C1A17] px-5 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 w-full rounded-none"
                >
                  <span>Inquire on WhatsApp</span>
                  <MessageSquare size={12} />
                </a>
                </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal Overlay */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-[#1C1A17]/95 flex flex-col justify-center items-center p-6 md:p-12 transition-opacity duration-300">
          
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 text-[#F9F6F0] hover:text-[#C2B280] transition-colors p-2 cursor-pointer z-55"
            aria-label="Close details"
          >
            <X size={24} />
          </button>

          {/* Frame */}
          <div className="relative w-full max-w-2xl aspect-[2/3] max-h-[75vh] bg-[#1C1A17] rounded-3xl overflow-hidden mb-6">
            <Image
              src={activeImage}
              alt={activeProductTitle}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Details & WhatsApp Inquiry inside Lightbox */}
          <div className="text-center w-full max-w-md">
            <span className="font-mono text-[9px] text-[#C2B280] tracking-widest uppercase block mb-1">
              PRODUCT CODE: {activeProductId}
            </span>
            <h3 className="font-serif text-xl text-[#F9F6F0] font-normal mb-3">
              {activeProductTitle}
            </h3>
            
            <a
              href={`${primaryWhatsAppBase}${encodeURIComponent(
                `Hi Handloom Garden, I am looking at the photo of ${activeProductTitle} (${activeProductId}) and would like to ask about price and sizes.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#C2B280] bg-[#C2B280] text-[#1C1A17] hover:bg-transparent hover:text-[#C2B280] px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 rounded-none cursor-pointer"
            >
              <span>WhatsApp Inquiry</span>
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
