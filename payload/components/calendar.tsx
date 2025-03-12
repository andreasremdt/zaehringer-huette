import { getAllBookings } from "@/payload/fetcher";
import type { TextFieldServerProps } from "payload";
import CalendarBookingWarning from "./calendar-booking-warning";
import CalendarLegend from "./calendar-legend";
import CalendarClient from "./calendar.client";

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
