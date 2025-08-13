import { isWithinInterval } from "date-fns";
import type { Booking } from "@/payload-types";
import { getNormalizedDate } from "./date-utils";

export function getHighlightClasses(bookings: Booking[]) {
  if (bookings.length === 0) {
    return "";
  }

  if (bookings.length === 1) {
    return bookings[0].confirmed ? "is-confirmed" : "is-unconfirmed";
  }

  const confirmed = bookings.some((b) => b.confirmed);
  const unconfirmed = bookings.some((b) => !b.confirmed);

  if (confirmed && unconfirmed) {
    return "is-mixed-overlap";
  }

  if (confirmed && !unconfirmed) {
    return "is-confirmed-overlap";
  }

  return "is-unconfirmed-overlap";
}

export function getBookingsForDate(bookings: Booking[], date: Date) {
  return bookings.filter((booking) => {
    return isWithinInterval(date, {
      start: getNormalizedDate(booking.from),
      end: getNormalizedDate(booking.to),
    });
  });
}
