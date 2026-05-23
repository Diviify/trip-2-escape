"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import {
  blogCategories,
  type BlogCategory,
  type BlogPostMeta,
} from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogListingProps = {
  posts: BlogPostMeta[];
};

type CategoryFilter = "All" | BlogCategory;

export function BlogListing({ posts }: BlogListingProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const counts = useMemo(() => {
    const tally: Record<CategoryFilter, number> = {
      All: posts.length,
      Tips: 0,
      Culture: 0,
      Food: 0,
      Adventure: 0,
    };

    for (const post of posts) {
      tally[post.category] += 1;
    }

    return tally;
  }, [posts]);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [posts, activeCategory]
  );

  const filters: CategoryFilter[] = ["All", ...blogCategories];

  return (
    <div className="space-y-8">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter articles by category"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeCategory === filter}
            onClick={() => setActiveCategory(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === filter
                ? "border-brand-primary bg-brand-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-brand-accent hover:text-foreground"
            )}
          >
            {filter}
            <span className="ml-1.5 text-xs opacity-70">({counts[filter]})</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No articles in this category yet.
        </p>
      )}
    </div>
  );
}
