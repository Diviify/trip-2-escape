export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerQuickLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    platform: "instagram",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    platform: "facebook",
  },
  {
    href: "https://x.com",
    label: "X (Twitter)",
    platform: "twitter",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    platform: "youtube",
  },
] as const;
