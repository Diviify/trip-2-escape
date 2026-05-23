"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuizStep = 0 | 1 | 2 | "result";

const travelStyles = [
  { id: "mountains", label: "Mountains & hills", href: "/destinations?state=Himachal" },
  { id: "culture", label: "Culture & heritage", href: "/destinations?state=Rajasthan" },
  { id: "beach", label: "Beaches & coast", href: "/destinations?state=Goa" },
  { id: "adventure", label: "Adventure & rafting", href: "/tours" },
] as const;

const budgets = [
  { id: "budget", label: "Under ₹15,000" },
  { id: "mid", label: "₹15,000 – ₹25,000" },
  { id: "premium", label: "₹25,000+" },
] as const;

const durations = [
  { id: "short", label: "2–4 days" },
  { id: "medium", label: "5–6 days" },
  { id: "long", label: "7+ days" },
] as const;

export function TravelQuiz() {
  const [step, setStep] = useState<QuizStep>(0);
  const [style, setStyle] = useState<string | null>(null);
  const [budget, setBudget] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const selectedStyle = travelStyles.find((item) => item.id === style);
  const selectedBudget = budgets.find((item) => item.id === budget);
  const selectedDuration = durations.find((item) => item.id === duration);

  function reset() {
    setStep(0);
    setStyle(null);
    setBudget(null);
    setDuration(null);
  }

  return (
    <section
      id="travel-quiz"
      className="scroll-mt-20 border-t bg-card px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="travel-quiz-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="travel-quiz-heading"
          className="text-center font-heading text-3xl font-semibold text-brand-primary"
        >
          Find your perfect trip
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Answer three quick questions and we&apos;ll point you to the right
          destinations and tours.
        </p>

        <div
          className="mt-8 rounded-2xl border border-border bg-background p-6 shadow-sm"
          aria-label="Travel style quiz"
        >
          {step === 0 && (
            <fieldset>
              <legend className="text-lg font-medium text-foreground">
                What kind of experience calls to you?
              </legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {travelStyles.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Travel style: ${item.label}`}
                    onClick={() => {
                      setStyle(item.id);
                      setStep(1);
                    }}
                    className={cn(
                      "rounded-xl border border-border px-4 py-3 text-left text-sm font-medium transition-colors hover:border-brand-accent hover:bg-brand-accent/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      style === item.id && "border-brand-primary bg-muted"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset>
              <legend className="text-lg font-medium text-foreground">
                What&apos;s your budget per person?
              </legend>
              <div className="mt-4 grid gap-2">
                {budgets.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Budget: ${item.label}`}
                    onClick={() => {
                      setBudget(item.id);
                      setStep(2);
                    }}
                    className="rounded-xl border border-border px-4 py-3 text-left text-sm font-medium transition-colors hover:border-brand-accent hover:bg-brand-accent/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset>
              <legend className="text-lg font-medium text-foreground">
                How long do you want to travel?
              </legend>
              <div className="mt-4 grid gap-2">
                {durations.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Trip length: ${item.label}`}
                    onClick={() => {
                      setDuration(item.id);
                      setStep("result");
                    }}
                    className="rounded-xl border border-border px-4 py-3 text-left text-sm font-medium transition-colors hover:border-brand-accent hover:bg-brand-accent/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === "result" && selectedStyle && (
            <div role="status">
              <h3 className="font-heading text-xl font-semibold text-brand-primary">
                Your travel match
              </h3>
              <p className="mt-3 text-muted-foreground">
                Based on your preferences, we recommend exploring{" "}
                <strong className="text-foreground">{selectedStyle.label}</strong>
                {selectedBudget && selectedDuration && (
                  <>
                    {" "}
                    for {selectedDuration.label} at {selectedBudget.label}.
                  </>
                )}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={selectedStyle.href}
                  className={cn(
                    buttonVariants(),
                    "bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
                  )}
                >
                  Browse recommendations
                </Link>
                <Button type="button" variant="outline" onClick={reset}>
                  Retake quiz
                </Button>
              </div>
            </div>
          )}

          {typeof step === "number" && step > 0 && (
            <button
              type="button"
              onClick={() => setStep((step - 1) as QuizStep)}
              className="mt-6 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
