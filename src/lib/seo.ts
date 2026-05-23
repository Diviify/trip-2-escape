import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { unsplash, photo } from "@/lib/images";

export const DEFAULT_OG_IMAGE = unsplash(photo.hero, 1200);

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}

type CreateMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  ogType = "website",
  publishedTime,
  authors,
  keywords,
}: CreateMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(ogType === "article" && publishedTime
        ? { publishedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function getDefaultMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description:
      "Curated travel experiences across India — destinations, tour packages, and expert travel guides from Wanderlust Travel.",
    keywords: [
      "India travel",
      "tour packages",
      "Himachal Pradesh",
      "Rajasthan tours",
      "Goa holidays",
      "travel agency",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: siteUrl,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description:
        "Curated travel experiences across India — destinations, tour packages, and expert travel guides.",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description:
        "Curated travel experiences across India — destinations, tour packages, and expert travel guides.",
      images: [DEFAULT_OG_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
