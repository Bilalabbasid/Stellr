import type { MetadataRoute } from "next";

const SITE = "https://stellr.biz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/get-started`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
