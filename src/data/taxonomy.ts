/** Client-safe taxonomy: categories and weave styles. No catalogue data lives here. */

export type Category = "sarees" | "kurtis" | "frocks" | "dresses" | "scarves" | "bed-covers";

export type Weave = "sambalpuri" | "pasapalli" | "bomkai" | "patachitra" | "ikat" | "tussar" | "handloom";

export const WEAVE_LABEL: Record<Weave, string> = {
  sambalpuri: "Sambalpuri Ikat",
  pasapalli: "Pasapalli",
  bomkai: "Bomkai",
  patachitra: "Patachitra Art",
  ikat: "Odisha Ikat",
  tussar: "Tussar Style",
  handloom: "Handloom Classic",
};

/** Weave → long-form guide under /weaves */
export const WEAVE_GUIDE: Partial<Record<Weave, string>> = {
  sambalpuri: "sambalpuri-saree",
  pasapalli: "sambalpuri-saree",
  bomkai: "bomkai-saree",
  patachitra: "patachitra-saree",
  ikat: "odisha-ikat",
};

export interface CategoryInfo {
  slug: Category;
  name: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  /** Answer-first intro paragraph: reads well to people, search snippets and AI assistants. */
  intro: string;
  keywords: string[];
  /** Categories stocked in the showroom but not yet photographed for the site. */
  inStoreOnly?: boolean;
  inStoreNote?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "sarees",
    name: "Sarees",
    h1: "Handloom Sarees in Puri",
    seoTitle: "Handloom Sarees in Puri | Sambalpuri, Bomkai, Patachitra & Ikat",
    seoDescription:
      "Shop authentic handloom sarees at Handloom Garden, Swargadwar, Puri: Sambalpuri ikat, Pasapalli, Bomkai, Patachitra art and Silk Mark silk sarees. Ask price on WhatsApp or visit our A/C showroom.",
    intro:
      "Handloom Garden stocks one of Puri's widest ranges of Odisha handloom sarees: Sambalpuri ikat and Pasapalli from western Odisha, Bomkai with its temple borders, Patachitra art sarees inspired by Raghurajpur, tussar and everyday cotton handlooms. Every saree can be seen in our A/C showroom at Swargadwar Square, and prices are shared on WhatsApp.",
    keywords: ["handloom saree Puri", "Sambalpuri saree Puri", "Bomkai saree", "Patachitra saree", "silk mark saree Puri", "best saree shop in Puri"],
  },
  {
    slug: "kurtis",
    name: "Kurtis",
    h1: "Ikat Kurtis & Kurta Sets",
    seoTitle: "Ikat Kurtis & Kurta Sets in Puri | Odisha Handloom Kurtis",
    seoDescription:
      "Odisha ikat kurtis and kurta sets with dupattas at Handloom Garden, Swargadwar, Puri. Everyday and festive handloom kurtis in cotton-comfortable weaves.",
    intro:
      "Our kurtis bring Odisha's ikat patterns into everyday wear: kurta sets with matching trousers and ikat dupattas, and single kurtis for work and travel. They are a popular pick for visitors to Puri who want handloom they can wear every day.",
    keywords: ["ikat kurti Puri", "handloom kurti Odisha", "kurta set with dupatta", "Sambalpuri kurti"],
  },
  {
    slug: "frocks",
    name: "Frocks",
    h1: "Ikat Anarkali Frocks",
    seoTitle: "Ikat Anarkali Frocks in Puri | Handloom Long Frocks",
    seoDescription:
      "Floor-length ikat anarkali frocks with full flare at Handloom Garden, Puri. Handloom patterns in easy, festive silhouettes.",
    intro:
      "Floor-length anarkali frocks cut from ikat-patterned fabric, with a full flare that moves beautifully. An easy way to wear handloom for festivals, family functions and evenings out.",
    keywords: ["ikat anarkali frock", "handloom long frock", "ikat gown Puri"],
  },
  {
    slug: "dresses",
    name: "Dress Materials",
    h1: "Handloom Dress Materials",
    seoTitle: "Handloom Dress Materials in Puri | Sambalpuri Salwar Suit Sets",
    seoDescription:
      "Unstitched Sambalpuri and ikat dress materials and salwar suit sets at Handloom Garden, Swargadwar, Puri. Visit the showroom or ask on WhatsApp for the current range.",
    intro:
      "Unstitched handloom dress materials and salwar suit sets, including Sambalpuri and ikat sets you can tailor to your fit. The range changes often, so the full selection is best seen in the showroom or on a WhatsApp video call.",
    keywords: ["Sambalpuri dress material", "handloom salwar suit Puri", "ikat dress material"],
    inStoreOnly: true,
    inStoreNote: "Our dress materials change with every new batch from the weavers. Ask on WhatsApp and we will send photos of what is in the showroom today.",
  },
  {
    slug: "scarves",
    name: "Jodo & Scarves",
    h1: "Jodo, Scarves & Stoles",
    seoTitle: "Jodo, Scarves & Stoles in Puri | Odisha Handloom Gifts",
    seoDescription:
      "Handloom jodo, scarves, stoles and dupattas from Odisha at Handloom Garden, Puri. Light, packable gifts for visitors to Puri.",
    intro:
      "Jodo, scarves, stoles and dupattas are the easiest piece of Odisha handloom to take home from Puri. They are light to pack, simple to gift, and woven in the same ikat and temple-border traditions as our sarees.",
    keywords: ["jodo Puri", "handloom scarf Odisha", "ikat stole", "Puri gifts"],
    inStoreOnly: true,
    inStoreNote: "Scarves and jodo sell quickly, especially in peak season. Message us for photos of the current colours.",
  },
  {
    slug: "bed-covers",
    name: "Bed Covers",
    h1: "Handloom Bed Covers",
    seoTitle: "Handloom Bed Covers in Puri | Sambalpuri & Ikat Bedsheets",
    seoDescription:
      "Handwoven cotton bed covers and bedsheets in Sambalpuri and ikat patterns at Handloom Garden, Swargadwar, Puri. Single, double and king sizes.",
    intro:
      "Handwoven cotton bed covers and bedsheets in ikat and geometric patterns bring Odisha's loom traditions into the home. They come in single, double and king sizes, and make lasting gifts.",
    keywords: ["handloom bed cover Puri", "Sambalpuri bedsheet", "ikat bed cover Odisha"],
    inStoreOnly: true,
    inStoreNote: "Bed covers are stocked in several sizes and patterns. Tell us your bed size on WhatsApp and we will share options.",
  },
];

export function getCategory(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
