import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Curated Travel Across India",
  description:
    "Plan unforgettable journeys with Wanderlust Travel — handpicked destinations, guided tour packages, and expert travel stories across Himachal, Rajasthan, Goa, and beyond.",
  path: "/",
  keywords: [
    "India travel agency",
    "holiday packages India",
    "adventure travel",
    "cultural tours",
  ],
});

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section
        id="destinations"
        className="scroll-mt-20 border-t bg-card px-6 py-16"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-primary">
            Destinations
          </h2>
          <p className="mt-3 text-muted-foreground">
            Discover handpicked journeys across Himachal, Uttarakhand,
            Rajasthan, Goa, and Maharashtra.
          </p>
          <a
            href="/destinations"
            className="mt-6 inline-flex rounded-full bg-brand-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-primary/90"
          >
            Browse all destinations
          </a>
        </div>
      </section>
      <section id="tours" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-primary">
            Tours
          </h2>
          <p className="mt-3 text-muted-foreground">
            Guided experiences tailored to your travel style.
          </p>
          <a
            href="/tours"
            className="mt-6 inline-flex rounded-full bg-brand-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-primary/90"
          >
            View tour packages
          </a>
        </div>
      </section>
      <section id="about" className="scroll-mt-20 border-t bg-card px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-primary">
            About
          </h2>
          <p className="mt-3 text-muted-foreground">
            A boutique travel agency built for curious explorers.
          </p>
        </div>
      </section>
      <section id="contact" className="scroll-mt-20 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-primary">
            Contact
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ready to plan your next adventure? We&apos;d love to hear from you.
          </p>
        </div>
      </section>
      <section
        id="book"
        className="scroll-mt-20 border-t bg-brand-primary px-6 py-16 text-primary-foreground"
      >
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-semibold">Book Now</h2>
          <p className="mt-3 text-primary-foreground/80">
            Reserve your spot on our next curated departure.
          </p>
        </div>
      </section>
    </main>
  );
}
