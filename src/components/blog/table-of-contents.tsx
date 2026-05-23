"use client";

import { List } from "lucide-react";
import { useEffect, useState } from "react";
import type { BlogHeading } from "@/lib/blog";
import { cn } from "@/lib/utils";

type TableOfContentsProps = {
  headings: BlogHeading[];
};

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0% -70% 0%", threshold: 0 }
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border bg-card p-5 shadow-sm"
    >
      <h2 className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-brand-primary">
        <List className="size-4 text-brand-accent" aria-hidden />
        On this page
      </h2>
      <ol className="mt-4 space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(heading.level === 3 && "pl-3")}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "block leading-snug transition-colors hover:text-brand-accent-text",
                activeId === heading.id
                  ? "font-medium text-brand-primary"
                  : "text-muted-foreground"
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
