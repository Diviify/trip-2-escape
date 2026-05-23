"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Destination } from "@/lib/destinations";

type BookingEnquiryFormProps = {
  destination: Destination;
};

export function BookingEnquiryForm({ destination }: BookingEnquiryFormProps) {
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
          Thank you for your interest in {destination.name}. Our travel
          specialists will contact you within 24 hours.
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
          Booking enquiry
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Plan your trip to {destination.name}. We&apos;ll tailor an itinerary
          to your dates and group size.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="travellers" className="text-sm font-medium">
            Travellers
          </label>
          <Input
            id="travellers"
            name="travellers"
            type="number"
            min={1}
            defaultValue={2}
            required
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="checkIn" className="text-sm font-medium">
            Preferred check-in
          </label>
          <Input id="checkIn" name="checkIn" type="date" required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="checkOut" className="text-sm font-medium">
            Preferred check-out
          </label>
          <Input id="checkOut" name="checkOut" type="date" required />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your travel preferences, budget, or special requests..."
          className="focus-visible:ring-3 focus-visible:ring-ring/50 w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
      >
        Send enquiry
      </Button>
    </form>
  );
}
