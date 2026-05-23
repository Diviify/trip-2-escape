"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatPriceInr, type Tour } from "@/lib/tours";

type TourBookingFormProps = {
  tour: Tour;
};

export function TourBookingForm({ tour }: TourBookingFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-brand-accent/30 bg-brand-accent/10 p-8 text-center"
        role="status"
      >
        <h3 className="font-heading text-xl font-semibold text-brand-primary">
          Enquiry received
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your interest in {tour.title}. We&apos;ll send a
          detailed itinerary within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
    >
      <div>
        <h3 className="font-heading text-xl font-semibold text-brand-primary">
          Book this tour
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {tour.title} · {formatPriceInr(tour.price)} per person
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="tour-name" className="text-sm font-medium">
            Full name
          </label>
          <Input id="tour-name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="tour-email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="tour-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="tour-phone" className="text-sm font-medium">
            Phone
          </label>
          <Input
            id="tour-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="tour-travellers" className="text-sm font-medium">
            Travellers
          </label>
          <Input
            id="tour-travellers"
            name="travellers"
            type="number"
            min={tour.groupSizeMin}
            max={tour.groupSizeMax}
            defaultValue={2}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="tour-date" className="text-sm font-medium">
            Preferred start date
          </label>
          <Input id="tour-date" name="startDate" type="date" required />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="tour-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="tour-message"
          name="message"
          rows={3}
          placeholder="Any special requests or questions?"
          className="focus-visible:ring-3 focus-visible:ring-ring/50 w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
      >
        Send booking enquiry
      </Button>
    </form>
  );
}
