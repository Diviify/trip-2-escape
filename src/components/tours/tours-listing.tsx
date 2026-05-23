"use client";

import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { TourCard } from "@/components/tours/tour-card";
import {
  type DurationFilter,
  type GroupSizeFilter,
  getTourPriceBounds,
  matchesDurationFilter,
  matchesGroupSizeFilter,
  sortTours,
  type SortOption,
  type Tour,
} from "@/lib/tours";
import { cn } from "@/lib/utils";

type ToursListingProps = {
  tours: Tour[];
};

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popularity-desc", label: "Most popular" },
  { value: "price-asc", label: "Price: Low to high" },
  { value: "price-desc", label: "Price: High to low" },
  { value: "duration-asc", label: "Duration: Shortest" },
  { value: "duration-desc", label: "Duration: Longest" },
];

const durationOptions: { value: DurationFilter; label: string }[] = [
  { value: "any", label: "Any duration" },
  { value: "short", label: "1–3 days" },
  { value: "medium", label: "4–6 days" },
  { value: "long", label: "7+ days" },
];

const groupSizeOptions: { value: GroupSizeFilter; label: string }[] = [
  { value: "any", label: "Any group size" },
  { value: "solo", label: "Solo / couple" },
  { value: "small", label: "Small (2–4)" },
  { value: "medium", label: "Medium (5–8)" },
  { value: "large", label: "Large (9+)" },
];

export function ToursListing({ tours }: ToursListingProps) {
  const bounds = useMemo(() => getTourPriceBounds(), []);

  const [budgetMin, setBudgetMin] = useState(bounds.min);
  const [budgetMax, setBudgetMax] = useState(bounds.max);
  const [durationFilter, setDurationFilter] = useState<DurationFilter>("any");
  const [groupSizeFilter, setGroupSizeFilter] =
    useState<GroupSizeFilter>("any");
  const [sort, setSort] = useState<SortOption>("popularity-desc");

  const filteredTours = useMemo(() => {
    const filtered = tours.filter(
      (tour) =>
        tour.price >= budgetMin &&
        tour.price <= budgetMax &&
        matchesDurationFilter(tour.durationDays, durationFilter) &&
        matchesGroupSizeFilter(tour, groupSizeFilter)
    );

    return sortTours(filtered, sort);
  }, [tours, budgetMin, budgetMax, durationFilter, groupSizeFilter, sort]);

  function resetFilters() {
    setBudgetMin(bounds.min);
    setBudgetMax(bounds.max);
    setDurationFilter("any");
    setGroupSizeFilter("any");
    setSort("popularity-desc");
  }

  const hasActiveFilters =
    budgetMin !== bounds.min ||
    budgetMax !== bounds.max ||
    durationFilter !== "any" ||
    groupSizeFilter !== "any";

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit space-y-6 rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-24">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-brand-primary">
            <SlidersHorizontal
              className="size-4 text-brand-accent"
              aria-hidden
            />
            Filters
          </h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              aria-label="Reset all tour filters"
              className="text-xs font-medium text-brand-accent-text hover:underline"
            >
              Reset
            </button>
          )}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium">Budget range</label>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>₹{budgetMin.toLocaleString("en-IN")}</span>
            <span>₹{budgetMax.toLocaleString("en-IN")}</span>
          </div>
          <div className="space-y-3">
            <div>
              <label htmlFor="budget-min" className="sr-only">
                Minimum budget
              </label>
              <input
                id="budget-min"
                type="range"
                min={bounds.min}
                max={bounds.max}
                step={500}
                value={budgetMin}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setBudgetMin(Math.min(value, budgetMax));
                }}
                className="w-full accent-brand-accent"
              />
            </div>
            <div>
              <label htmlFor="budget-max" className="sr-only">
                Maximum budget
              </label>
              <input
                id="budget-max"
                type="range"
                min={bounds.min}
                max={bounds.max}
                step={500}
                value={budgetMax}
                onChange={(event) => {
                  const value = Number(event.target.value);
                  setBudgetMax(Math.max(value, budgetMin));
                }}
                className="w-full accent-brand-accent"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="duration-filter" className="text-sm font-medium">
            Duration
          </label>
          <select
            id="duration-filter"
            value={durationFilter}
            onChange={(event) =>
              setDurationFilter(event.target.value as DurationFilter)
            }
            className="focus-visible:ring-3 focus-visible:ring-ring/50 h-9 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring"
          >
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="group-filter" className="text-sm font-medium">
            Group size
          </label>
          <select
            id="group-filter"
            value={groupSizeFilter}
            onChange={(event) =>
              setGroupSizeFilter(event.target.value as GroupSizeFilter)
            }
            className="focus-visible:ring-3 focus-visible:ring-ring/50 h-9 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring"
          >
            {groupSizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </aside>

      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {filteredTours.length}
            </span>{" "}
            of {tours.length} tours
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-tours" className="text-sm font-medium">
              Sort by
            </label>
            <select
              id="sort-tours"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className={cn(
                "focus-visible:ring-3 focus-visible:ring-ring/50 h-9 min-w-[180px] rounded-lg border border-input bg-background px-2.5 text-sm outline-none focus-visible:border-ring"
              )}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          {filteredTours.length > 0 ? (
            <motion.div
              key={`${sort}-${durationFilter}-${groupSizeFilter}-${budgetMin}-${budgetMax}`}
              layout
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2"
            >
              <AnimatePresence mode="popLayout">
                {filteredTours.map((tour) => (
                  <motion.div
                    key={tour.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <TourCard tour={tour} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-muted/30 rounded-2xl border border-dashed border-border px-6 py-16 text-center"
            >
              <p className="font-medium text-foreground">
                No tours match your filters
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Try widening your budget range or changing duration and group
                size.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                aria-label="Clear all tour filters"
                className="mt-4 text-sm font-medium text-brand-accent-text hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
