import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BlogPostNotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-heading text-3xl font-semibold text-brand-primary">
        Article not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        This story may have moved or been removed. Browse our latest travel
        writing below.
      </p>
      <Link
        href="/blog"
        className={cn(buttonVariants(), "mt-8 bg-brand-primary")}
      >
        Back to blog
      </Link>
    </main>
  );
}
