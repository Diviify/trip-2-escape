export const blogCategories = [
  "Tips",
  "Culture",
  "Food",
  "Adventure",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  featuredImage: string;
  author: BlogAuthor;
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  headings: BlogHeading[];
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): BlogHeading[] {
  const headings: BlogHeading[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\s*#+\s*$/, "").trim();
    headings.push({ id: slugify(text), text, level });
  }

  return headings;
}

export function formatBlogDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
