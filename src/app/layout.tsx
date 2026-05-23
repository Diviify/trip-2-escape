import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Curated travel experiences and unforgettable destinations with Wanderlust Travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(cormorantGaramond.variable, dmSans.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <MotionProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
