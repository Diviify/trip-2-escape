import { ArrowLeft, Calendar, Check, Clock, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingEnquiryForm } from "@/components/destinations/booking-enquiry-form";
import { PhotoGallery } from "@/components/destinations/photo-gallery";
import {
  formatPriceInr,
  getAllDestinationSlugs,
  getDestinationBySlug,
} from "@/lib/destinations";

type DestinationPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    return { title: "Destination not found" };
  }

  return {
    title: destination.name,
    description: destination.shortDescription,
  };
}

export default function DestinationDetailPage({
  params,
}: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="relative min-h-[42vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-brand-primary/30" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <Link
            href="/destinations"
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All destinations
          </Link>
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
            <MapPin className="size-3.5 text-brand-accent" aria-hidden />
            {destination.state}, India
          </span>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">
            {destination.shortDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/90">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <Clock className="size-3.5 text-brand-accent" aria-hidden />
              {destination.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent px-3 py-1 font-semibold text-brand-primary">
              From {formatPriceInr(destination.priceFrom)}
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-brand-primary">
                Photo gallery
              </h2>
              <div className="mt-6">
                <PhotoGallery
                  images={destination.gallery}
                  alt={destination.name}
                />
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-brand-primary">
                About this destination
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {destination.description}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-brand-primary">
                Highlights
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {destination.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4 text-sm"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-brand-accent"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-heading text-2xl font-semibold text-brand-primary">
                <Calendar className="size-5 text-brand-accent" aria-hidden />
                Itinerary
              </h2>
              <ol className="relative mt-6 space-y-0 border-l border-border pl-6">
                {destination.itinerary.map((day) => (
                  <li key={day.day} className="relative pb-8 last:pb-0">
                    <span className="absolute -left-[1.6rem] top-1 flex size-5 items-center justify-center rounded-full border-2 border-brand-accent bg-background text-[10px] font-bold text-brand-primary">
                      {day.day}
                    </span>
                    <h3 className="font-medium text-foreground">{day.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {day.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <BookingEnquiryForm destination={destination} />
          </aside>
        </div>
      </section>
    </main>
  );
}
