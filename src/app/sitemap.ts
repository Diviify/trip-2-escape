import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog.server";
import { getAllDestinationSlugs } from "@/lib/destinations";
import { getSiteUrl } from "@/lib/seo";
import { getAllTourSlugs } from "@/lib/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/tours`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const destinationRoutes: MetadataRoute.Sitemap =
    getAllDestinationSlugs().map((slug) => ({
      url: `${siteUrl}/destinations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const tourRoutes: MetadataRoute.Sitemap = getAllTourSlugs().map((slug) => ({
    url: `${siteUrl}/tours/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes, ...blogRoutes];
}
