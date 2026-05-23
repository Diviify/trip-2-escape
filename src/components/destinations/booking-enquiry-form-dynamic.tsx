import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/ui/form-skeleton";
import type { Destination } from "@/lib/destinations";

const BookingEnquiryForm = dynamic(
  () =>
    import("@/components/destinations/booking-enquiry-form").then((module) => ({
      default: module.BookingEnquiryForm,
    })),
  { loading: () => <FormSkeleton /> }
);

type BookingEnquiryFormDynamicProps = {
  destination: Destination;
};

export function BookingEnquiryFormDynamic({
  destination,
}: BookingEnquiryFormDynamicProps) {
  return <BookingEnquiryForm destination={destination} />;
}
