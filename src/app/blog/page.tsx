import type { Metadata } from "next";
import { BlogListing } from "@/components/blog/blog-listing";
import { getAllPosts } from "@/lib/blog.server";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Travel Blog",
  description:
    "Travel tips, culture guides, food trails, and adventure stories from across India — insider advice from the Wanderlust Travel team.",
  path: "/blog",
  keywords: [
    "India travel blog",
    "travel tips",
    "culture guides",
    "food travel",
    "adventure travel",
  ],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1">
      <section className="border-b bg-brand-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-accent-text">
            Journal
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
            Travel Blog
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Insider guides on packing, festivals, regional cuisine, and
            adventure — written by travellers who know India intimately.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <BlogListing posts={posts} />
        </div>
      </section>
    </main>
  );
}
