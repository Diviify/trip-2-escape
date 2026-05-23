import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "@/components/tours/star-rating";
import { buttonVariants } from "@/components/ui/button";
import { formatPriceInr, type Tour } from "@/lib/tours";
import { cn } from "@/lib/utils";

type TourCardProps = {
  tour: Tour;
};

export function TourCard({ tour }: TourCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={tour.thumbnail}
          alt={tour.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-primary/90 px-2.5 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
          <Clock className="size-3 text-brand-accent" aria-hidden />
          {tour.durationLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {tour.region}
        </p>
        <h3 className="mt-1 font-heading text-xl font-semibold text-brand-primary">
          {tour.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {tour.shortDescription}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground">From</p>
            <p className="text-lg font-semibold text-brand-primary">
              {formatPriceInr(tour.price)}
            </p>
          </div>
          <StarRating rating={tour.rating} reviewCount={tour.reviewCount} />
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className={cn(
            buttonVariants({ size: "default" }),
            "mt-4 w-full justify-center bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
          )}
        >
          View Tour
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
