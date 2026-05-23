import { type BlogCategory } from "@/lib/blog";
import { cn } from "@/lib/utils";

const categoryStyles: Record<BlogCategory, string> = {
  Tips: "bg-brand-primary/90 text-primary-foreground",
  Culture: "bg-brand-accent/90 text-brand-primary",
  Food: "bg-coral/90 text-white",
  Adventure: "bg-white/90 text-brand-primary",
};

type BlogCategoryBadgeProps = {
  category: BlogCategory;
  className?: string;
};

export function BlogCategoryBadge({
  category,
  className,
}: BlogCategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm",
        categoryStyles[category],
        className
      )}
    >
      {category}
    </span>
  );
}
