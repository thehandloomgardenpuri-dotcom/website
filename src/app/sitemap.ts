import { MetadataRoute } from "next";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.handloomgarden.com";
  
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/category/sarees",
    "/category/kurtis",
    "/category/bed-covers",
    "/category/dresses",
    "/category/scarves",
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/category") ? 0.8 : 0.6,
  }));

  const productSitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticSitemap, ...productSitemap];
}
