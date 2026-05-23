import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons/social-icons";
import { NewsletterForm } from "@/components/newsletter-form";
import { footerQuickLinks, socialLinks } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  twitter: XIcon,
  youtube: YoutubeIcon,
} as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-heading text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-foreground/80 text-sm transition-colors hover:text-brand-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold">Newsletter</h2>
          <p className="text-primary-foreground/80 mt-2 text-sm">
            Get travel inspiration, exclusive deals, and destination guides
            delivered to your inbox.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold">Follow Us</h2>
          <p className="text-primary-foreground/80 mt-2 text-sm">
            Join our community of explorers and share your adventures.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-primary-foreground transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-brand-primary"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-primary-foreground/70 border-t border-white/10 py-5 text-center text-sm">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
