import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puri Handloom Garden | Authentic Odia Handloom Collections",
  description: "Experience the finest handwoven sarees, kurtis, bed covers, and ethnic wear directly from local Odia artisans. Visit our showroom at Swargadwar Square, Puri, Odisha.",
  keywords: [
    "Puri Handloom Garden",
    "Sambalpuri Silk Saree",
    "Bomkai Saree",
    "Puri Handloom",
    "Odisha weavers",
    "handwoven textiles",
    "authentic handloom",
    "Odia handloom showroom",
    "Swargadwar Puri handloom"
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Puri Handloom Garden | Authentic Odia Handloom Collections",
    description: "Experience the finest handwoven sarees, kurtis, bed covers, and ethnic wear directly from local Odia artisans.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
