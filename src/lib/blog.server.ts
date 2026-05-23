import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  extractHeadings,
  type BlogCategory,
  type BlogPost,
  type BlogPostMeta,
} from "@/lib/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parsePost(filename: string): BlogPost {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const slug =
    typeof data.slug === "string"
      ? data.slug
      : filename.replace(/\.mdx$/, "");

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    category: data.category as BlogCategory,
    date: data.date as string,
    featuredImage: data.featuredImage as string,
    author: data.author as BlogPost["author"],
    readingTime: stats.text,
    content,
    headings: extractHeadings(content),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const { content, headings, ...meta } = parsePost(file);
    void content;
    void headings;
    return meta;
  })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (!fs.existsSync(BLOG_DIR)) return undefined;

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"));

  for (const file of files) {
    const post = parsePost(file);
    if (post.slug === slug) return post;
  }

  return undefined;
}

export function getAllPostSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
