import type { Booking } from "@/payload-types";
import { isWithinInterval } from "date-fns";
import Link from "next/link";
import type { Data } from "payload";
import { getNormalizedDate } from "../utils/date-utils";

type Props = {
  bookings: Booking[];
  data: Data;
};

export default function CalendarBookingWarning({ bookings, data }: Props) {
  const start = getNormalizedDate(data.from);
  const end = getNormalizedDate(data.to);

  const conflicts = bookings.filter((booking) => {
    if (booking.id === data.id) {
      return false;
    }

    return (
      isWithinInterval(start, {
        start: getNormalizedDate(booking.from),
        end: getNormalizedDate(booking.to),
      }) ||
      isWithinInterval(end, {
        start: getNormalizedDate(booking.from),
        end: getNormalizedDate(booking.to),
      })
    );
  });

  if (conflicts.length === 0) {
    return null;
  }

  return (
    <div className="calendar-warning" role="alert">
      <p>Achtung! Diese Buchung überschneidet sich mit:</p>

      <ul>
        {conflicts.map((conflict) => (
          <li key={conflict.id}>
            <Link href={`/admin/collections/bookings/${conflict.id}`}>
              {conflict.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
