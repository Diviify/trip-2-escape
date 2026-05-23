"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { navLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="border-border/60 bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
      <nav
        className="mx-auto max-w-6xl px-4 lg:px-6"
        aria-label="Main navigation"
      >
        <div className="relative flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            onClick={() => setMobileOpen(false)}
          >
            <Compass
              className="size-7 text-brand-accent"
              aria-hidden
              strokeWidth={1.75}
            />
            <span className="font-heading text-xl font-semibold tracking-tight text-brand-primary">
              {siteConfig.name}
            </span>
          </Link>

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-accent",
                    pathname === link.href ||
                      (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-brand-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/#book"
              className={cn(
                buttonVariants({ size: "default" }),
                "hidden bg-brand-accent text-brand-primary hover:bg-brand-accent/90 lg:inline-flex"
              )}
            >
              Book Now
            </Link>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-brand-primary transition-colors hover:bg-muted lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="size-6" aria-hidden />
              ) : (
                <Menu className="size-6" aria-hidden />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="mobile-nav-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="border-border/60 overflow-hidden border-t lg:hidden"
            >
              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 0 }}
                exit={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-1 px-2 py-4"
              >
                <ul className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-brand-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link
                    href="/#book"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "w-full justify-center bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
                    )}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
