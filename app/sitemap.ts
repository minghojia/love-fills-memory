import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://lovefillsmemory.com",
      lastModified: new Date(),
    },
    {
      url: "https://lovefillsmemory.com/manifesto",
      lastModified: new Date(),
    },
    {
      url: "https://lovefillsmemory.com/our-story",
      lastModified: new Date(),
    },
    {
      url: "https://lovefillsmemory.com/write",
      lastModified: new Date(),
    },
  ];
}