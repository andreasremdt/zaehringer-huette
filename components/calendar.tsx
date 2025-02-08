import { getAllBookings } from "@/payload/fetcher";
import Link from "next/link";
import type { TextFieldServerProps } from "payload";
import CalendarClient from "./calendar.client";

type Props = TextFieldServerProps;

export default async function Calendar({ data }: Props) {
  const startDate = new Date(data.from);
  const endDate = new Date(data.to);

  const bookings = await getAllBookings();
  const filteredBookings = bookings.filter(
    (booking) => booking.id !== data.id && booking.confirmed,
  );
  const otherBookings = filteredBookings.map((booking) => {
    const from = new Date(booking.from);
    const to = new Date(booking.to);

    const overlap =
      (from <= startDate && startDate <= to) ||
      (from <= endDate && endDate <= to);

    return {
      from,
      to,
      overlap,
      id: booking.id,
      name: `${booking.name} (${booking.email})`,
    };
  });

  const doubleBookings = otherBookings.filter((booking) => booking.overlap);

  return (
    <>
      {doubleBookings.length > 0 ? (
        <div className="rdp-warning" role="alert">
          <p>Achtung! Diese Buchung überschneidet sich mit:</p>
          <ul>
            {doubleBookings.map((doubleBooking) => (
              <li key={doubleBooking.id}>
                <Link href={`/admin/collections/bookings/${doubleBooking.id}`}>
                  {doubleBooking.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <CalendarClient
        modifiers={{
          otherBookings: otherBookings,
          thisBooking: { from: startDate, to: endDate },
        }}
        modifiersClassNames={{
          otherBookings: "rdp-day_other-bookings",
          thisBooking: "rdp-day_current-booking",
        }}
        defaultMonth={startDate}
      />
      <ul className="rdp-legend">
        <li>
          <span className="rdp-legend_box rdp-legend_box--free" /> freie Tage
        </li>
        <li>
          <span className="rdp-legend_box rdp-legend_box--booked" /> gebuchte,
          bestätigte Tage
        </li>
        <li>
          <span className="rdp-legend_box rdp-legend_box--current" /> aktuelle,
          offene Buchung
        </li>
        <li>
          <span className="rdp-legend_box rdp-legend_box--overlap" />{" "}
          Überschneidung
        </li>
      </ul>
    </>
  );
}
