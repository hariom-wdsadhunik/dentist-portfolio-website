import { MetadataRoute } from "next";
import { SERVICES_CATALOG } from "@/lib/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aura-dental-studio.demo";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/experience",
    "/testimonials",
    "/faq",
    "/contact",
    "/book",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_CATALOG.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
