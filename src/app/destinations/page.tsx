import type { Metadata } from "next";
import { DestinationGrid } from "@/components/destinations/destination-grid";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore curated travel destinations across Himachal, Uttarakhand, Rajasthan, Goa, and Maharashtra.",
};

export default function DestinationsPage() {
  return (
    <main className="flex-1">
      <section className="border-b bg-brand-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
            India
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            Destinations
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl">
            From Himalayan peaks to golden deserts and sun-kissed beaches — find
            your next journey across India&apos;s most captivating states.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <DestinationGrid />
        </div>
      </section>
    </main>
  );
}
