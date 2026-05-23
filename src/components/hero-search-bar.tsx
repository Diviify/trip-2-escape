"use client";

import { Calendar, MapPin, Minus, Plus, Search, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type HeroSearchBarProps = {
  className?: string;
};

export function HeroSearchBar({ className }: HeroSearchBarProps) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [travellersOpen, setTravellersOpen] = useState(false);
  const travellersRef = useRef<HTMLDivElement>(null);

  const totalTravellers = adults + children;
  const travellerLabel =
    totalTravellers === 1 ? "1 traveller" : `${totalTravellers} travellers`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        travellersRef.current &&
        !travellersRef.current.contains(event.target as Node)
      ) {
        setTravellersOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleCheckInChange(value: string) {
    setCheckIn(value);
    if (checkOut && value > checkOut) {
      setCheckOut("");
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full max-w-5xl rounded-2xl border border-white/20 bg-white/95 p-3 shadow-2xl backdrop-blur-md",
        className
      )}
    >
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1.2fr_1fr_auto] lg:items-stretch">
        <label className="flex flex-col gap-1.5 rounded-xl px-3 py-2 transition-colors hover:bg-sand/60">
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <MapPin className="size-3.5 text-brand-accent" aria-hidden />
            Destination
          </span>
          <Input
            type="text"
            placeholder="City, country, or landmark"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            className="h-9 border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
            aria-label="Destination"
          />
        </label>

        <div className="lg:border-border/50 flex flex-col gap-1.5 rounded-xl px-3 py-2 transition-colors hover:bg-sand/60 lg:border-l">
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <Calendar className="size-3.5 text-brand-accent" aria-hidden />
            Dates
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="date"
              value={checkIn}
              onChange={(event) => handleCheckInChange(event.target.value)}
              className="h-9 w-full min-w-0 flex-1 rounded-md border-0 bg-transparent text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
              aria-label="Check-in date"
            />
            <span
              className="hidden text-muted-foreground sm:inline"
              aria-hidden
            >
              –
            </span>
            <input
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(event) => setCheckOut(event.target.value)}
              className="h-9 w-full min-w-0 flex-1 rounded-md border-0 bg-transparent text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
              aria-label="Check-out date"
            />
          </div>
        </div>

        <div
          ref={travellersRef}
          className="lg:border-border/50 relative flex flex-col gap-1.5 rounded-xl px-3 py-2 transition-colors hover:bg-sand/60 lg:border-l"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <Users className="size-3.5 text-brand-accent" aria-hidden />
            Travellers
          </span>
          <button
            type="button"
            onClick={() => setTravellersOpen((open) => !open)}
            className="flex h-9 items-center rounded-md text-left text-sm font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/40"
            aria-expanded={travellersOpen}
            aria-haspopup="dialog"
          >
            {travellerLabel}
          </button>

          {travellersOpen && (
            <div
              role="dialog"
              aria-label="Select travellers"
              className="absolute left-0 right-0 top-full z-20 mt-2 rounded-xl border border-border bg-white p-4 shadow-xl lg:left-auto lg:right-0 lg:min-w-[260px]"
            >
              <TravellerRow
                label="Adults"
                description="Ages 13+"
                value={adults}
                min={1}
                onChange={setAdults}
              />
              <TravellerRow
                label="Children"
                description="Ages 0–12"
                value={children}
                min={0}
                onChange={setChildren}
              />
              <Button
                type="button"
                size="sm"
                className="mt-3 w-full bg-brand-primary text-primary-foreground hover:bg-brand-primary/90"
                onClick={() => setTravellersOpen(false)}
              >
                Done
              </Button>
            </div>
          )}
        </div>

        <div className="flex items-end lg:pl-1">
          <Button
            type="submit"
            size="lg"
            className="h-12 w-full bg-brand-accent text-brand-primary hover:bg-brand-accent/90 lg:h-full lg:min-w-[140px]"
          >
            <Search className="size-4" aria-hidden />
            Search
          </Button>
        </div>
      </div>
    </form>
  );
}

type TravellerRowProps = {
  label: string;
  description: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
};

function TravellerRow({
  label,
  description,
  value,
  min,
  onChange,
}: TravellerRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <Minus className="size-3.5" aria-hidden />
        </button>
        <span className="w-6 text-center text-sm font-medium">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="inline-flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <Plus className="size-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
