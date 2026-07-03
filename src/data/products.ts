export interface Product {
  id: string;
  title: string;
  cluster: string;
  image: string;
  desc: string;
  category: 'sarees' | 'dresses' | 'kurtis' | 'scarves' | 'bed-covers';
  spec?: string;
  sizes?: string;
  composition?: string;
}

export const products: Product[] = [
  // SAREES
  {
    id: "PHG-SAR-001",
    title: "Sambalpuri Silk Ikat Saree",
    cluster: "Bargarh District",
    image: "/images/product_6.webp",
    desc: "Beautiful double-ikat silk saree featuring traditional geometric patterns. Hand-dyed using natural colors before weaving.",
    spec: "Pure Silk • 5.5 Meters • Matching borders",
    category: "sarees",
  },
  {
    id: "PHG-SAR-002",
    title: "Bomkai Cotton & Silk Saree",
    cluster: "Ganjam District",
    image: "/images/product_9.webp",
    desc: "Distinct thread work detailing traditional borders and pallu patterns inspired by local folklore.",
    spec: "Silk-Cotton Blend • Handwoven quality",
    category: "sarees",
  },
  {
    id: "PHG-SAR-003",
    title: "Patachitra Painted Saree",
    cluster: "Raghurajpur Village",
    image: "/images/product_8.webp",
    desc: "Traditional mythological stories hand-painted onto pure tussar silk using natural colors.",
    spec: "Pure Tussar Silk • Hand-Painted art",
    category: "sarees",
  },
  {
    id: "PHG-SAR-004",
    title: "Nuapatna Gita Govinda Saree",
    cluster: "Nuapatna Village",
    image: "/images/product_12.webp",
    desc: "Traditional silk saree woven with sacred verses from the Gita Govinda, used for temple rituals in Puri.",
    spec: "Mulberry Silk • Natural Yellow Dyes",
    category: "sarees",
  },
  {
    id: "PHG-SAR-005",
    title: "Traditional Sonpur Silk Saree",
    cluster: "Sonpur District",
    image: "/images/product_1.webp",
    desc: "Classic wedding-weight Odia silk. Renowned for its rich border contrast and structured temple patterns.",
    spec: "Pure Silk • Elegant Gold borders",
    category: "sarees",
  },
  {
    id: "PHG-SAR-006",
    title: "Kotpad Organic Cotton Saree",
    cluster: "Koraput District",
    image: "/images/product_10.webp",
    desc: "Thick, comfortable organic cotton dyed using natural roots. Woven slowly by local tribal weavers.",
    spec: "Organic Cotton • Natural Root Dyes",
    category: "sarees",
  },

  // DRESSES
  {
    id: "PHG-DRS-001",
    title: "Nuapatna Woven Dress Material",
    cluster: "Nuapatna Village",
    image: "/images/product_3.webp",
    desc: "Three-piece unstitched set with beautiful handwoven patterns. Comes with matching dupattas and bottom panels.",
    spec: "Top (2.5m), Bottom (2m), Dupatta (2.2m) • Soft Cotton",
    category: "dresses",
  },
  {
    id: "PHG-DRS-002",
    title: "Sambalpuri Cotton Dress Set",
    cluster: "Bargarh District",
    image: "/images/product_20.webp",
    desc: "Comfortable unstitched cotton set. Features traditional double-ikat details and geometric designs.",
    spec: "100% Cotton • Natural dye accents • Long-lasting quality",
    category: "dresses",
  },
  {
    id: "PHG-DRS-003",
    title: "Khandua Silk Dress Set",
    cluster: "Nuapatna Cooperatives",
    image: "/images/product_21.webp",
    desc: "Beautiful unstitched dress set featuring traditional borders on soft, shiny mulberry silk.",
    spec: "Pure Silk • High-quality weave • Zari borders",
    category: "dresses",
  },

  // KURTIS
  {
    id: "PHG-KRT-001",
    title: "Maniabandha Ikat Kurti",
    cluster: "Maniabandha Village",
    image: "/images/product_4.webp",
    desc: "Beautiful handwoven cotton kurti featuring traditional floral borders and fish-scale designs.",
    spec: "Handloom Cotton • Comfortable fit",
    category: "kurtis",
  },
  {
    id: "PHG-KRT-002",
    title: "Hand-Block Printed Kurti",
    cluster: "Nuapatna Cooperatives",
    image: "/images/product_20.webp",
    desc: "Traditional block-print detailing along the neckline. Woven with lightweight cotton, perfect for hot weather.",
    spec: "Pure Cotton • Natural Colors",
    category: "kurtis",
  },
  {
    id: "PHG-KRT-003",
    title: "Bomkai Pattern Accent Kurti",
    cluster: "Ganjam District",
    image: "/images/product_16.webp",
    desc: "Features intricate traditional Bomkai borders on the sleeves and neckline. Woven on a local wooden loom.",
    spec: "Cotton-Silk Blend • Traditional Weave",
    category: "kurtis",
  },
  {
    id: "PHG-KRT-004",
    title: "Sambalpuri Stripe Weave Kurti",
    cluster: "Bargarh District",
    image: "/images/product_17.webp",
    desc: "Simple, elegant kurti with handwoven stripes and subtle borders.",
    spec: "100% Cotton • Soft & Breathable",
    category: "kurtis",
  },

  // SCARVES
  {
    id: "PHG-SCF-001",
    title: "Ganjam Silk Stole",
    cluster: "Ganjam District",
    image: "/images/product_2.webp",
    desc: "Delicate, lightweight handloom silk dupatta with subtle gold highlights along borders. A beautiful gift or traditional accessory.",
    spec: "100% Ganjam Silk • 2.2 Meters • Soft fabric",
    category: "scarves",
  },
  {
    id: "PHG-SCF-002",
    title: "Handwoven Cotton Ikat Scarf",
    cluster: "Bargarh District",
    image: "/images/product_15.webp",
    desc: "Comfortable cotton stole with traditional patterns. Soft, durable, and highly breathable, perfect for warm weather.",
    spec: "Pure Cotton • 1.8 Meters • Handwoven",
    category: "scarves",
  },
  {
    id: "PHG-SCF-003",
    title: "Jodo & Temple Calligraphy Stole",
    cluster: "Nuapatna Cooperatives",
    image: "/images/product_22.webp",
    desc: "Traditional style scarf featuring calligraphic motifs and red accent borders.",
    spec: "100% Silk-Cotton • Natural Dye Accents",
    category: "scarves",
  },

  // BED COVERS
  {
    id: "PHG-COV-001",
    title: "Kotpad Heavy Cotton Bed Cover",
    cluster: "Koraput District",
    image: "/images/product_5.webp",
    desc: "Thick, comfortable organic cotton dyed using natural roots. Highly durable handwoven texture with traditional borders.",
    sizes: "Single (60\" x 90\"), Double (90\" x 108\")",
    composition: "100% Organic Cotton • Natural Dyes",
    category: "bed-covers",
  },
  {
    id: "PHG-COV-002",
    title: "Sambalpuri Ikat Bed Cover",
    cluster: "Bargarh District",
    image: "/images/product_10.webp",
    desc: "Beautiful ikat patterns featuring geometric lines and traditional central designs. Very soft cotton fabric.",
    sizes: "Double (90\" x 108\"), King (108\" x 108\")",
    composition: "100% Pure Cotton • Traditional Dye",
    category: "bed-covers",
  },
  {
    id: "PHG-COV-003",
    title: "Nuapatna Woven Summer Bed Cover",
    cluster: "Nuapatna Village",
    image: "/images/product_19.webp",
    desc: "Lightweight bedspread with fine woven textures. Soft and comfortable, ideal for warm weather.",
    sizes: "Single (60\" x 90\"), Double (90\" x 100\")",
    composition: "Pure Handspun Cotton • Handwoven",
    category: "bed-covers",
  },
  {
    id: "PHG-COV-004",
    title: "Ganjam Chevron Accent Bedspread",
    cluster: "Ganjam District",
    image: "/images/product_19.webp",
    desc: "Features beautiful handwoven chevron patterns. Adds a nice traditional touch to your home decor.",
    sizes: "Double (90\" x 108\")",
    composition: "Cotton-Linen Weave • Textured Finish",
    category: "bed-covers",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category);
}
