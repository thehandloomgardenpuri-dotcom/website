import { SITE, SITE_URL, MAPS, BRAND_IMAGES, FULL_ADDRESS } from "./site";
import { productPath, type Product } from "./product-shape";
import type { QA } from "@/data/weaves";

export const STORE_ID = `${SITE_URL}/#store`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type Json = Record<string, unknown>;

export function storeSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["ClothingStore", "LocalBusiness"],
    "@id": STORE_ID,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    slogan: SITE.tagline,
    description: SITE.description,
    url: SITE_URL,
    logo: BRAND_IMAGES.roundLogo,
    image: [BRAND_IMAGES.showroom, BRAND_IMAGES.wordmark],
    telephone: SITE.phones.landline.e164,
    email: SITE.email,
    foundingDate: SITE.foundingYear,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1}, ${SITE.address.street}`,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: MAPS.place,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.hours.days.map((d) => `https://schema.org/${d}`),
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    contactPoint: [
      { "@type": "ContactPoint", telephone: SITE.phones.landline.e164, contactType: "customer service", areaServed: "IN", availableLanguage: ["English", "Odia", "Hindi", "Bengali"] },
      { "@type": "ContactPoint", telephone: SITE.phones.whatsapp.e164, contactType: "sales", contactOption: "WhatsApp", areaServed: "IN" },
    ],
    areaServed: [
      { "@type": "City", name: "Puri" },
      { "@type": "State", name: "Odisha" },
      { "@type": "Country", name: "India" },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Air-conditioned showroom", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ground floor access", value: true },
    ],
    hasCertification: {
      "@type": "Certification",
      name: "Silk Mark",
      issuedBy: { "@type": "Organization", name: "Silk Mark Organisation of India" },
    },
    knowsAbout: [
      "Sambalpuri saree", "Bomkai saree", "Patachitra saree", "Kotpad saree", "Odisha ikat",
      "Khandua silk", "Pasapalli saree", "Silk Mark certified silk", "Handloom textiles of Odisha",
    ],
    keywords: "handloom saree shop Puri, Sambalpuri saree Puri, Bomkai saree, Patachitra saree, Silk Mark saree store Puri, Swargadwar",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handloom collections",
      itemListElement: ["Sarees", "Kurtis", "Frocks", "Dress Materials", "Jodo & Scarves", "Bed Covers"].map((name) => ({
        "@type": "OfferCatalog",
        name,
      })),
    },
    sameAs: [SITE.social.instagram, SITE.social.facebook],
    publicAccess: true,
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: `${SITE.name} Puri`,
    alternateName: SITE.alternateNames,
    inLanguage: "en-IN",
    publisher: { "@id": STORE_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: QA[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productSchema(product: Product, categoryName: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}${productPath(product)}#product`,
    name: product.title,
    sku: product.id,
    productID: product.id,
    description: `${product.description} Available at Handloom Garden, Swargadwar Square, Puri, Odisha.`,
    image: [product.image],
    url: `${SITE_URL}${productPath(product)}`,
    category: `Clothing > ${categoryName}`,
    brand: { "@type": "Brand", name: SITE.name },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Weave style", value: product.weaveLabel },
      { "@type": "PropertyValue", name: "Origin", value: "Odisha, India" },
      { "@type": "PropertyValue", name: "Available at", value: FULL_ADDRESS },
    ],
  };
}

export function itemListSchema(name: string, products: Product[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: products.length,
    itemListElement: products.map((p, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${productPath(p)}`,
      name: p.title,
    })),
  };
}

export function articleSchema(input: { title: string; description: string; path: string; image: string; about: string[] }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [input.image],
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    about: input.about.map((name) => ({ "@type": "Thing", name })),
    author: { "@id": STORE_ID },
    publisher: { "@id": STORE_ID },
    datePublished: "2026-09-15",
    dateModified: "2026-09-15",
    inLanguage: "en-IN",
    contentLocation: { "@type": "Place", name: "Puri, Odisha, India" },
  };
}
