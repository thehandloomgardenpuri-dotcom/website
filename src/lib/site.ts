/**
 * Single source of truth for Handloom Garden's business facts (NAP, hours,
 * socials). Every page, schema block and llms.txt reads from here so the
 * details search engines and AI assistants see are always identical.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handloomgarden.com").replace(/\/$/, "");

export const SITE = {
  name: "Handloom Garden",
  alternateNames: [
    "Handloom Garden Puri",
    "Puri Handloom Garden",
    "Handloom Garden A/C Mega Showroom",
    "ହ୍ୟାଣ୍ଡଲୁମ ଗାର୍ଡେନ",
    "हैंडलूम गार्डन",
    "হ্যান্ডলুম গার্ডেন",
  ],
  tagline: "Puri's Destination for Authentic Handloom Collections",
  description:
    "Handloom Garden is a Silk Mark certified A/C mega showroom at Swargadwar Square, Puri, Odisha, offering authentic Sambalpuri, Bomkai, Patachitra, Kotpad and Ikat handloom sarees, kurtis, frocks, dress materials, jodo, scarves and bed covers.",
  foundingYear: "1978",
  email: "rajeshmullick.puri@gmail.com",
  phones: {
    landline: { e164: "+916752220037", display: "06752 220037" },
    whatsapp: { e164: "+919937937653", wa: "919937937653", display: "+91 99379 37653" },
    alternate: { e164: "+919861900000", wa: "919861900000", display: "+91 98619 00000" },
  },
  address: {
    line1: "Ground Floor, A/C Mega Showroom",
    street: "Swargadwar Square, Bharat Sevashram Marg",
    locality: "Puri",
    region: "Odisha",
    regionCode: "IN-OR",
    postalCode: "752001",
    country: "IN",
    countryName: "India",
  },
  /** Google Maps pin of the listing, plus code 7MF7QRV9+J5G (QRV9+J5G Puri). */
  geo: { lat: 19.794062, lng: 85.817953, plusCode: "7MF7QRV9+J5G" },
  hours: {
    opens: "09:00",
    closes: "21:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    display: "Open every day, 9 AM to 9 PM",
  },
  social: {
    instagram: "https://www.instagram.com/handloomgarden.puri/",
    instagramHandle: "@handloomgarden.puri",
    facebook: "https://www.facebook.com/profile.php?id=61591189491062",
  },
} as const;

export const FULL_ADDRESS = `${SITE.address.line1}, ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`;

const mapsQuery = encodeURIComponent("Handloom Garden, Swargadwar Square, Puri, Odisha 752001");
export const MAPS = {
  place: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  embed: `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`,
};

export function whatsappLink(message: string, number: string = SITE.phones.whatsapp.wa): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Handloom Garden, I found you on your website and would like to know more about your collection.";

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://ziygbdfuyokqolgvtfxf.supabase.co";
/** Publishable keys are designed to be public; the fallback keeps preview deploys working. */
export const SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_Bp9y_JmYZ_mWW8eOKWXSHQ_uy7D4cxy";

export function storageUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/site/${path}`;
}

export const BRAND_IMAGES = {
  wordmark: storageUrl("brand/handloom-garden-logo-wordmark.webp"),
  roundLogo: storageUrl("brand/handloom-garden-logo-round.webp"),
  silkMark: storageUrl("brand/silk-mark-certified.webp"),
  showroom: storageUrl("brand/handloom-garden-showroom-swargadwar-puri.webp"),
};
