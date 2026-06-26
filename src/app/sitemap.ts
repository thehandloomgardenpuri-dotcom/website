import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://purihandloomgarden.com";
  
  const routes = [
    "",
    "/about",
    "/contact",
    "/category/sarees",
    "/category/kurtis",
    "/category/bed-covers",
    "/category/dresses",
    "/category/scarves",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/category") ? 0.8 : 0.6,
  }));
}
