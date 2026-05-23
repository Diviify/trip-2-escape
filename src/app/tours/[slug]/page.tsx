import { ArrowLeft, Clock, Users } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StarRating } from "@/components/tours/star-rating";
import { TourBookingForm } from "@/components/tours/tour-booking-form";
import { buttonVariants } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";
import { formatPriceInr, getAllTourSlugs, getTourBySlug } from "@/lib/tours";
import { cn } from "@/lib/utils";

type TourPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: TourPageProps): Metadata {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    return { title: "Tour not found" };
  }

  return createPageMetadata({
    title: tour.title,
    description: tour.shortDescription,
    path: `/tours/${tour.slug}`,
    image: tour.thumbnail,
    keywords: [tour.title, tour.region, "India tour package", tour.durationLabel],
  });
}

export default function TourDetailPage({ params }: TourPageProps) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="relative min-h-[36vh] overflow-hidden">
        <Image
          src={tour.thumbnail}
          alt={tour.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/50 to-brand-primary/20" />
        <div className="relative mx-auto flex min-h-[36vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <Link
            href="/tours"
            className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All tours
          </Link>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-accent">
            {tour.region}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-semibold text-white sm:text-5xl">
            {tour.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              <Clock className="size-3.5 text-brand-accent" aria-hidden />
              {tour.durationLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
              <Users className="size-3.5 text-brand-accent" aria-hidden />
              {tour.groupSizeMin}–{tour.groupSizeMax} travellers
            </span>
            <StarRating
              rating={tour.rating}
              reviewCount={tour.reviewCount}
              className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm [&_span]:text-white [&_svg]:fill-brand-accent"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm text-muted-foreground">Package price</p>
              <p className="mt-1 font-heading text-3xl font-semibold text-brand-primary">
                {formatPriceInr(tour.price)}
                <span className="text-base font-normal text-muted-foreground">
                  {" "}
                  / person
                </span>
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-brand-primary">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {tour.shortDescription}
              </p>
            </div>
            <Link
              href="/destinations"
              className={cn(buttonVariants({ variant: "outline" }), "w-fit")}
            >
              Explore related destinations
            </Link>
          </div>

          <aside className="lg:sticky lg:top-24">
            <TourBookingForm tour={tour} />
          </aside>
        </div>
      </section>
    </main>
  );
}
