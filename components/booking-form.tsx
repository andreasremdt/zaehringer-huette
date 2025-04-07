import type { CalendarBlock } from "@/payload-types";
import { getAllBookings, getGlobalCosts } from "@/payload/fetcher";
import BookingFormClient from "./booking-form.client";

type Props = CalendarBlock;

export default async function BookingForm(props: Props) {
  const bookings = await getAllBookings();
  const costs = await getGlobalCosts();

  return <BookingFormClient {...props} bookings={bookings} costs={costs} />;
}
