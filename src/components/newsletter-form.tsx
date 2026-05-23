"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
      className="space-y-3"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          aria-label="Email address"
          className="placeholder:text-primary-foreground/60 border-white/20 bg-white/10 text-primary-foreground focus-visible:border-brand-accent focus-visible:ring-brand-accent/40"
        />
        <Button
          type="submit"
          className="shrink-0 bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
        >
          Subscribe
        </Button>
      </div>
      {status === "success" && (
        <p className="text-sm text-primary-foreground/90" role="status">
          Thanks for subscribing! We&apos;ll be in touch soon.
        </p>
      )}
    </form>
  );
}
