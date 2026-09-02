import type { MetadataRoute } from "next";
import { requestSiteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
    ],
    sitemap: `${requestSiteUrl()}/sitemap.xml`,
  };
}
