import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Handloom Garden, Puri",
    short_name: "Handloom Garden",
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#fdf8f0",
    theme_color: "#8b1a2b",
    lang: "en-IN",
    categories: ["shopping", "lifestyle"],
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
