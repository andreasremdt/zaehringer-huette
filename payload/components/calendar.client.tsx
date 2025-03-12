"use client";

import type { Booking } from "@/payload-types";
import { useState } from "react";
import { getDaysInMonth, getMonths } from "../utils/date-utils";
import CalendarCell from "./calendar-cell";

type Props = {
  bookings: Booking[];
};

export default function CalendarClient({ bookings }: Props) {
  const [year, setYear] = useState(() => new Date().getFullYear());

  return (
    <>
      <div className="year-selector">
        <button
          type="button"
          className="button"
          title="Vorheriges Jahr"
          onClick={() => setYear((previous) => previous - 1)}
        >
          &laquo;
        </button>
        <span className="year">{year}</span>
        <button
          type="button"
          className="button"
          title="Nächstes Jahr"
          onClick={() => setYear((previous) => previous + 1)}
        >
          &raquo;
        </button>
      </div>

      <div className="calendar">
        {getMonths(year).map((month) => (
          <div key={month.index} className="calendar-row">
            <span className="calendar-month">
              {month.label} {year}
            </span>
            <ul className="calendar-grid">
              {getDaysInMonth(year, month.index + 1).map((day) => (
                <CalendarCell
                  key={day}
                  bookings={bookings}
                  day={day}
                  month={month.index}
                  year={year}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
