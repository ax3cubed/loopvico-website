import type { MetadataRoute } from "next";
import {
  locationPages,
  servicePages,
  solutionPages,
} from "@/lib/landing-content";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const basePages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/locations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const locationEntries: MetadataRoute.Sitemap = locationPages.map((item) => ({
    url: `${siteConfig.url}/locations/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((item) => ({
    url: `${siteConfig.url}/services/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutionPages.map((item) => ({
    url: `${siteConfig.url}/solutions/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...basePages, ...locationEntries, ...serviceEntries, ...solutionEntries];
}
