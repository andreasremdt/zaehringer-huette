import type { TextFieldServerProps } from "payload";
import { getAllBookings } from "@/payload/fetcher";
import CalendarClient from "./calendar.client";
import CalendarBookingWarning from "./calendar-booking-warning";
import CalendarLegend from "./calendar-legend";

export default async function Calendar({ data }: TextFieldServerProps) {
  const bookings = await getAllBookings();

  return (
    <>
      <CalendarBookingWarning bookings={bookings} data={data} />
      <CalendarClient bookings={bookings} />
      <CalendarLegend />
    </>
  );
}
