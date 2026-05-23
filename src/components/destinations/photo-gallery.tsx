"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OptimisedImage } from "@/components/ui/optimised-image";

type PhotoGalleryProps = {
  images: string[];
  alt: string;
};

export function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="space-y-4" role="region" aria-label={`${alt} photo gallery`}>
      <motion.div
        key={activeImage}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative aspect-[16/10] overflow-hidden rounded-2xl"
      >
        <OptimisedImage
          src={activeImage}
          alt={`${alt} — gallery image ${activeIndex + 1} of ${images.length}`}
          fill
          sizes="(max-width: 1200px) 100vw, 960px"
          className="object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
              index === activeIndex
                ? "border-brand-accent ring-2 ring-brand-accent/30"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={`Show gallery image ${index + 1} of ${images.length} for ${alt}`}
            aria-pressed={index === activeIndex}
          >
            <OptimisedImage
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
