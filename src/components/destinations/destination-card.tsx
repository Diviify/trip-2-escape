import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { OptimisedImage } from "@/components/ui/optimised-image";
import { buttonVariants } from "@/components/ui/button";
import { type Destination, formatPriceInr } from "@/lib/destinations";
import { cn } from "@/lib/utils";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  const imageAlt = `${destination.name}, ${destination.state} — ${destination.shortDescription}`;

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      aria-label={`Explore ${destination.name} in ${destination.state}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimisedImage
          src={destination.image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-brand-primary backdrop-blur-sm">
          <MapPin className="size-3 text-brand-accent-text" aria-hidden />
          {destination.state}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary">
          From {formatPriceInr(destination.priceFrom)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl font-semibold text-brand-primary transition-colors group-hover:text-brand-accent-text">
          {destination.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {destination.shortDescription}
        </p>
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-4 w-full justify-center border-brand-primary/20 group-hover:border-brand-accent group-hover:bg-brand-accent/10"
          )}
        >
          Explore
          <ArrowRight
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
