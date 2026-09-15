import type { Metadata } from "next";
import { SITE, SITE_URL } from "./site";

/**
 * Keyword map. Three clusters are combined per page:
 *   PLACE   – where people search from / about (Puri landmarks, Odisha)
 *   PRODUCT – what they want (weaves, garments, certifications)
 *   INTENT  – how they phrase it ("best … in Puri", "near Jagannath Temple")
 * Pages pull the clusters that match their topic so titles, H1s, body copy,
 * alt text and schema all reinforce the same local + product relevance.
 */
export const KEYWORDS = {
  place: [
    "Puri",
    "Puri Odisha",
    "Swargadwar",
    "Swargadwar Square Puri",
    "Bharat Sevashram Marg Puri",
    "near Jagannath Temple Puri",
    "near Puri Sea Beach",
    "Grand Road Puri",
    "Odisha",
    "Orissa",
  ],
  product: [
    "handloom saree",
    "Sambalpuri saree",
    "Sambalpuri silk saree",
    "Sambalpuri ikat saree",
    "Bomkai saree",
    "Patachitra saree",
    "Kotpad saree",
    "Odisha ikat saree",
    "Pasapalli saree",
    "Khandua saree",
    "tussar saree",
    "cotton handloom saree",
    "silk mark saree",
    "ikat kurti",
    "ikat kurta set",
    "anarkali frock",
    "dress material",
    "handloom bed cover",
    "jodo",
    "stole and scarf",
  ],
  intent: [
    "best saree shop in Puri",
    "handloom shop in Puri",
    "saree shop near Jagannath Temple",
    "saree shop in Swargadwar Puri",
    "authentic handloom sarees in Puri",
    "silk mark certified saree store in Puri",
    "where to buy Sambalpuri saree in Puri",
    "Odisha handloom showroom",
    "A/C saree showroom Puri",
    "what to buy in Puri",
    "Puri shopping",
    "buy Sambalpuri silk sarees online",
  ],
  regional: ["ପୁରୀ ଶାଢ଼ୀ ଦୋକାନ", "ସମ୍ବଲପୁରୀ ଶାଢ଼ୀ", "पुरी साड़ी दुकान", "संबलपुरी साड़ी", "পুরী শাড়ির দোকান"],
} as const;

export const CORE_KEYWORDS = [
  "Handloom Garden Puri",
  ...KEYWORDS.intent.slice(0, 6),
  ...KEYWORDS.product.slice(0, 8),
  ...KEYWORDS.place.slice(0, 5),
];

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: { url: string; width?: number; height?: number; alt: string };
  /** Use the title verbatim instead of appending the brand suffix. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = CORE_KEYWORDS,
  image,
  absoluteTitle,
  type = "website",
}: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  // Without a page-specific image, the branded card from app/opengraph-image.tsx is inherited.
  const images = image ? [image] : undefined;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE.name,
      locale: "en_IN",
      ...(images && { images }),
    },
    twitter: { card: "summary_large_image", title, description, ...(images && { images: images.map((i) => i.url) }) },
  };
}
