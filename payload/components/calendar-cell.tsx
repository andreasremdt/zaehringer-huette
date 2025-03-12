import { cn } from "@/lib/utils";
import type { Booking } from "@/payload-types";
import { isEqual } from "date-fns";
import {
  getBookingsForDate,
  getHighlightClasses,
} from "../utils/calendar-utils";
import { getNormalizedDate } from "../utils/date-utils";

type Props = {
  bookings: Booking[];
  day: number;
  month: number;
  year: number;
};

export default function CalendarCell({ bookings, day, year, month }: Props) {
  const today = new Date(year, month, day);
  const bookingsForDate = getBookingsForDate(bookings, today);

  return (
    <li
      className={cn("booking-cell", getHighlightClasses(bookingsForDate), {
        "is-first": bookingsForDate.some((b) =>
          isEqual(getNormalizedDate(b.from), today),
        ),
      })}
    >
      {bookingsForDate.length > 0 ? "" : day}

      {bookingsForDate.map((booking) => {
        if (new Date(booking.from).getDate() === day) {
          return (
            <a
              className="booking-title"
              href={`/admin/collections/bookings/${booking.id}`}
              key={booking.id}
            >
              {booking.name} - {booking.email}
            </a>
          );
        }

        return null;
      })}
    </li>
  );
}
