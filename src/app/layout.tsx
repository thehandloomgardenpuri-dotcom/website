import type { Metadata, Viewport } from "next";
import { Noto_Serif_Oriya } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import JsonLd from "@/components/JsonLd";
import { BOOT_SCRIPT } from "@/lib/boot";
import { SITE, SITE_URL } from "@/lib/site";
import { CORE_KEYWORDS } from "@/lib/seo";
import { storeSchema, websiteSchema } from "@/lib/schema";

/**
 * Zodiak (display) and Satoshi (text) are by the Indian Type Foundry, served from
 * Fontshare's CDN as their ITF Free Font License allows. The files are deliberately
 * not committed: the repository is public and the license forbids redistribution.
 */
const FONTSHARE_CSS = "https://api.fontshare.com/v2/css?f[]=zodiak@400,500,401&f[]=satoshi@400,500,700&display=swap";

// Odia script (only the Odia accents use it).
const oriya = Noto_Serif_Oriya({
  subsets: ["oriya"],
  weight: ["400", "600"],
  variable: "--font-oriya",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Handloom Garden Puri | Handloom Saree Shop at Swargadwar, Odisha",
    template: "%s | Handloom Garden Puri",
  },
  description: SITE.description,
  keywords: CORE_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "shopping",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_IN",
    url: SITE_URL,
    title: "Handloom Garden Puri | Authentic Odisha Handloom Sarees",
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  formatDetection: { telephone: true, address: true },
  other: {
    "geo.region": SITE.address.regionCode,
    "geo.placename": "Puri, Odisha",
    "geo.position": `${SITE.geo.lat};${SITE.geo.lng}`,
    ICBM: `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f0",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={oriya.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTSHARE_CSS} />
        <noscript>
          <style>{`.preloader{display:none!important}[data-hero-intro]{visibility:visible!important}`}</style>
        </noscript>
        <link rel="preconnect" href="https://ziygbdfuyokqolgvtfxf.supabase.co" crossOrigin="" />
      </head>
      <body className="grain">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-maroon focus:px-5 focus:py-3 focus:text-cream">
          Skip to content
        </a>
        <JsonLd data={[storeSchema(), websiteSchema()]} />
        <Preloader />
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
