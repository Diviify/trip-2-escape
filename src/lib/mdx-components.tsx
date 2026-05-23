import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { slugify } from "@/lib/blog";
import { cn } from "@/lib/utils";

function createHeading(level: 2 | 3) {
  const Tag = `h${level}` as const;

  return function Heading({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"h2">) {
    const text =
      typeof children === "string"
        ? children
        : Array.isArray(children)
          ? children.join("")
          : "";
    const id = slugify(text);

    return (
      <Tag
        id={id}
        className={cn(
          "scroll-mt-24 font-heading font-semibold text-brand-primary",
          level === 2 && "mt-10 text-2xl",
          level === 3 && "mt-8 text-xl",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  };
}

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mt-8 font-heading text-3xl font-semibold text-brand-primary",
        className
      )}
      {...props}
    />
  ),
  h2: createHeading(2),
  h3: createHeading(3),
  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn("mt-4 leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={cn(
        "mt-4 list-disc space-y-2 pl-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className={cn(
        "mt-4 list-decimal space-y-2 pl-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={cn("leading-relaxed", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "border-brand-accent text-foreground/90 mt-6 border-l-4 pl-4 italic",
        className
      )}
      {...props}
    />
  ),
  a: ({
    className,
    href,
    ...props
  }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={cn(
            "text-brand-primary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent",
            className
          )}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className={cn(
          "text-brand-primary underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-accent",
          className
        )}
        {...props}
      />
    );
  },
  img: (props: ComponentPropsWithoutRef<"img">) => {
    const src = typeof props.src === "string" ? props.src : "";
    if (!src) return null;
    return (
      <span className="relative my-8 block aspect-video overflow-hidden rounded-xl">
        <Image
          src={src}
          alt={props.alt ?? ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </span>
    );
  },
  hr: () => <hr className="my-10 border-border" />,
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className={cn("font-semibold text-foreground", className)}
      {...props}
    />
  ),
};
