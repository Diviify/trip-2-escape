"use client";

import { destinationStates, type DestinationState } from "@/lib/destinations";
import { cn } from "@/lib/utils";

export type FilterValue = "All" | DestinationState;

type DestinationFilterProps = {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
  counts: Record<FilterValue, number>;
};

const filters: FilterValue[] = ["All", ...destinationStates];

export function DestinationFilter({
  active,
  onChange,
  counts,
}: DestinationFilterProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter destinations by state"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={active === filter}
          aria-label={`Filter by ${filter}`}
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active === filter
              ? "border-brand-primary bg-brand-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-brand-accent hover:text-foreground"
          )}
        >
          {filter}
          <span className="ml-1.5 text-xs opacity-70">({counts[filter]})</span>
        </button>
      ))}
    </div>
  );
}
