import { ArrowLeft, Clock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { BlogCategoryBadge } from "@/components/blog/blog-category-badge";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { formatBlogDate, getSiteUrl } from "@/lib/blog";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog.server";
import { mdxComponents } from "@/lib/mdx-components";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  const siteUrl = getSiteUrl();

  if (!post) {
    return { title: "Article not found" };
  }

  const url = `${siteUrl}/blog/${post.slug}`;
  const ogImage = post.featuredImage;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1">
      <article>
        <header className="relative min-h-[44vh] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/55 to-brand-primary/25" />
          <div className="relative mx-auto flex min-h-[44vh] max-w-6xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex w-fit items-center gap-2 text-sm text-white/80 transition-colors hover:text-brand-accent"
            >
              <ArrowLeft className="size-4" aria-hidden />
              All articles
            </Link>
            <BlogCategoryBadge category={post.category} />
            <h1 className="mt-4 max-w-4xl font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-white/70">{post.author.role}</p>
                </div>
              </div>
              <span className="hidden h-8 w-px bg-white/30 sm:block" aria-hidden />
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5 text-brand-accent" aria-hidden />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_260px] lg:items-start">
            <div className="min-w-0">
              <div className="prose-blog max-w-none">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <TableOfContents headings={post.headings} />
            </aside>
          </div>
        </div>
      </article>
    </main>
  );
}
