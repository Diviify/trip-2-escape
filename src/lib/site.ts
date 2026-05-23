export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Wanderlust Travel",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@wanderlust-travel.example",
} as const;
