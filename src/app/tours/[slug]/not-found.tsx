import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function TourNotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-3xl font-semibold text-brand-primary">
        Tour not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        This tour package may have been updated. Browse our current offerings
        below.
      </p>
      <Link
        href="/tours"
        className={cn(buttonVariants(), "mt-8 bg-brand-primary")}
      >
        View all tours
      </Link>
    </main>
  );
}
