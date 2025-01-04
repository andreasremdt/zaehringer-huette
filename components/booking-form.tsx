import type { CalendarBlock } from "@/payload-types";
import { getAllBookings } from "@/payload/fetcher";
import BookingFormClient from "./booking-form.client";

type Props = CalendarBlock;

export default async function BookingForm(props: Props) {
  const bookings = await getAllBookings();

  return <BookingFormClient {...props} bookings={bookings} />;
}
