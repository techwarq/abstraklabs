import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

// Last modified for static pages — update when content changes
const staticRoutes = [
  "",
  "/ai-freelancer",
  "/ai-data-entry",
  "/ai-research",
  "/ai-lead-generation",
  "/ai-data-cleaning",
  "/ai-crm-cleanup",
  "/ai-invoice-processing",
  "/ai-ecommerce-operations",
  "/ai-web-research",
  "/ai-document-processing",
  "/work",
  "/work/crm-cleanup",
  "/work/invoice-processing",
  "/work/product-catalog-cleanup",
  "/work-guarantee",
  "/hire",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : route.startsWith("/work") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/ai-freelancer" ? 0.9 : route.startsWith("/ai-") ? 0.85 : route === "/work" ? 0.8 : 0.7,
  }));
}
