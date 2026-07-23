import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

// Required by `output: "export"` — metadata routes must be fully static.
export const dynamic = "force-static";

/** Allow everything and point crawlers at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
