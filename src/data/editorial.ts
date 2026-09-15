import meta from "./editorial-meta.json";
import { storageUrl } from "@/lib/site";

/**
 * Editorial "fabric detail" images: close crops of Handloom Garden's own saree photos
 * (see scripts/make-editorial-images.ts). Used as mood imagery where the showroom has
 * no product photos yet. Alt text describes what is actually shown: a weave detail.
 */
export interface EditorialImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blur: string;
}

type Key = keyof typeof meta;

const ALT: Record<Key, string> = {
  "bed-covers": "Close-up of bright Pasapalli checks in handwoven Odisha cotton, Handloom Garden Puri",
  "dress-materials": "Close-up of ivory ikat fabric with elephants and parrots, Handloom Garden Puri",
  "jodo-scarves": "Close-up of a crimson temple border and saffron handloom drape, Handloom Garden Puri",
  "kotpad-texture": "Close-up of maroon and white handwoven geometric ikat, Handloom Garden Puri",
  "loom-detail": "Close-up of a red handloom pallu with tree of life motifs, Handloom Garden Puri",
  "sambalpuri-detail": "Close-up of black and scarlet Sambalpuri bandha weave, Handloom Garden Puri",
};

export function editorial(key: Key): EditorialImage {
  const m = meta[key];
  return { src: storageUrl(m.path), alt: ALT[key], width: m.width, height: m.height, blur: m.blur };
}

/** Mood image for categories that are stocked in the showroom but not yet photographed. */
export const CATEGORY_EDITORIAL: Partial<Record<string, Key>> = {
  "bed-covers": "bed-covers",
  dresses: "dress-materials",
  scarves: "jodo-scarves",
};

/** Weave guides without a photographed product of that weave. */
export const WEAVE_EDITORIAL: Partial<Record<string, Key>> = {
  "kotpad-saree": "kotpad-texture",
};
