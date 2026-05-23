"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { HeroSearchBar } from "@/components/hero-search-bar";
import { OptimisedImage } from "@/components/ui/optimised-image";
import { photo, unsplash } from "@/lib/images";

const HERO_IMAGE = unsplash(photo.hero, 2400);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [0.55, 0.72]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 will-change-transform motion-reduce:transform-none"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          <OptimisedImage
            src={HERO_IMAGE}
            alt="Sunlit mountain valley with pine forests and golden sky at dawn"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-brand-primary/75 via-brand-primary/55 to-brand-primary/85"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
        <motion.p
          className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand-accent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Wanderlust Travel
        </motion.p>

        <motion.h1
          className="max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Your next adventure awaits
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Discover handpicked destinations, plan your perfect dates, and embark
          on journeys crafted by travel experts who know the world by heart.
        </motion.p>

        <motion.div
          className="mt-10 w-full"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSearchBar />
        </motion.div>

        <ScrollHint progress={scrollYProgress} />
      </div>
    </section>
  );
}

function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const hintOpacity = useTransform(progress, [0, 0.15], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      style={{ opacity: hintOpacity }}
      aria-hidden
    >
      <span className="text-xs uppercase tracking-widest text-white/80">
        Scroll to explore
      </span>
      <motion.span
        className="block h-10 w-px origin-top bg-white/70"
        animate={{ scaleY: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
