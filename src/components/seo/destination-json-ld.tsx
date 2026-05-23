import type { Destination } from "@/lib/destinations";
import { getSiteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const STATE_REGION_MAP: Record<Destination["state"], string> = {
  Himachal: "Himachal Pradesh, India",
  Uttarakhand: "Uttarakhand, India",
  Rajasthan: "Rajasthan, India",
  Goa: "Goa, India",
  Maharashtra: "Maharashtra, India",
};

type DestinationJsonLdProps = {
  destination: Destination;
};

export function DestinationJsonLd({ destination }: DestinationJsonLdProps) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/destinations/${destination.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": pageUrl,
    name: destination.name,
    description: destination.description,
    url: pageUrl,
    image: [destination.image, ...destination.gallery],
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: STATE_REGION_MAP[destination.state],
    },
    touristType: [
      "Adventure travelers",
      "Culture enthusiasts",
      "Family travelers",
    ],
    offers: {
      "@type": "Offer",
      price: destination.priceFrom,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: pageUrl,
      seller: {
        "@type": "TravelAgency",
        name: siteConfig.name,
        url: siteUrl,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
