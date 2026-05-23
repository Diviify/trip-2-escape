"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PhotoGalleryProps = {
  images: string[];
  alt: string;
};

export function PhotoGallery({ images, alt }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className="space-y-4">
      <motion.div
        key={activeImage}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative aspect-[16/10] overflow-hidden rounded-2xl"
      >
        <Image
          src={activeImage}
          alt={`${alt} — photo ${activeIndex + 1}`}
          fill
          priority
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
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all",
              index === activeIndex
                ? "border-brand-accent ring-2 ring-brand-accent/30"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            aria-label={`View image ${index + 1}`}
            aria-pressed={index === activeIndex}
          >
            <Image
              src={image}
              alt=""
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
