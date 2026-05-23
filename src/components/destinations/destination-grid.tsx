"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/destinations/destination-card";
import {
  DestinationFilter,
  type FilterValue,
} from "@/components/destinations/destination-filter";
import { destinations } from "@/lib/destinations";

export function DestinationGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");

  const counts = useMemo(() => {
    const tally: Record<FilterValue, number> = {
      All: destinations.length,
      Himachal: 0,
      Uttarakhand: 0,
      Rajasthan: 0,
      Goa: 0,
      Maharashtra: 0,
    };

    for (const destination of destinations) {
      tally[destination.state] += 1;
    }

    return tally;
  }, []);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? destinations
        : destinations.filter(
            (destination) => destination.state === activeFilter
          ),
    [activeFilter]
  );

  return (
    <div className="space-y-8">
      <DestinationFilter
        active={activeFilter}
        onChange={setActiveFilter}
        counts={counts}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          No destinations found for this state. Try another filter.
        </p>
      )}
    </div>
  );
}
