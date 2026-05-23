import type { Metadata } from "next";
import { ToursListing } from "@/components/tours/tours-listing";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse curated tour packages across India. Filter by budget, duration, and group size.",
};

export default function ToursPage() {
  return (
    <main className="flex-1">
      <section className="border-b bg-brand-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
            Packages
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            Tour Packages
          </h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl">
            Handcrafted itineraries with local guides, boutique stays, and
            unforgettable experiences — filter and sort to find your perfect
            trip.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ToursListing tours={tours} />
        </div>
      </section>
    </main>
  );
}
