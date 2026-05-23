import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/ui/form-skeleton";

const TravelQuiz = dynamic(
  () =>
    import("@/components/travel-quiz").then((module) => ({
      default: module.TravelQuiz,
    })),
  {
    loading: () => (
      <section className="border-t bg-card px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <FormSkeleton />
        </div>
      </section>
    ),
    ssr: false,
  }
);

export function TravelQuizSection() {
  return <TravelQuiz />;
}
