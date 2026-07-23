import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Required by `output: "export"` — metadata routes must be fully static.
export const dynamic = "force-static";

/**
 * Single-page site — one URL. Emitted as a static /sitemap.xml by the
 * export build and referenced from robots.txt.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
