import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/ui/form-skeleton";
import type { Tour } from "@/lib/tours";

const TourBookingForm = dynamic(
  () =>
    import("@/components/tours/tour-booking-form").then((module) => ({
      default: module.TourBookingForm,
    })),
  { loading: () => <FormSkeleton /> }
);

type TourBookingFormDynamicProps = {
  tour: Tour;
};

export function TourBookingFormDynamic({ tour }: TourBookingFormDynamicProps) {
  return <TourBookingForm tour={tour} />;
}
