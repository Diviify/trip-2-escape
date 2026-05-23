import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogCategoryBadge } from "@/components/blog/blog-category-badge";
import { formatBlogDate, type BlogPostMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPostMeta;
  className?: string;
};

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3">
          <BlogCategoryBadge category={post.category} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden />
            {post.readingTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="mt-2 font-heading text-xl font-semibold text-brand-primary transition-colors group-hover:text-brand-accent">
            {post.title}
          </h2>
        </Link>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex items-center gap-2.5">
            <Image
              src={post.author.avatar}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-medium text-foreground">
                {post.author.name}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary transition-colors hover:text-brand-accent"
          >
            Read
            <ArrowRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
