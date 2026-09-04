import type { MetadataRoute } from "next";
import { artists } from "./data/artists";
import { releases } from "./data/music";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://madiq-empire.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/artists`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...artists.map((artist) => ({
      url: `${baseUrl}/artists/${artist.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/music`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...releases.map((release) => ({
      url: `${baseUrl}/music/${release.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}