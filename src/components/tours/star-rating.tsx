import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  rating: number;
  reviewCount?: number;
  className?: string;
};

export function StarRating({
  rating,
  reviewCount,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div
        className="flex items-center gap-0.5"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = rating >= index + 1;
          const half = !filled && rating > index && rating < index + 1;

          return (
            <Star
              key={index}
              className={cn(
                "size-3.5",
                filled
                  ? "fill-brand-accent text-brand-accent"
                  : half
                    ? "fill-brand-accent/50 text-brand-accent"
                    : "text-muted-foreground/40 fill-muted"
              )}
              aria-hidden
            />
          );
        })}
      </div>
      <span className="text-sm font-medium text-foreground">
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className="text-xs text-muted-foreground">({reviewCount})</span>
      )}
    </div>
  );
}
