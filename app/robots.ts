import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/internal/", "/login"],
    },
    sitemap: "https://www.khorshid-mafakher.ir/sitemap.xml",
  };
}
