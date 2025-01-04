"use client";

import { de } from "date-fns/locale";
import { DayPicker, type DayPickerProps } from "react-day-picker";

type Props = DayPickerProps;

export default function CalendarClient(props: Props) {
  return (
    <DayPicker
      mode="single"
      locale={de}
      labels={{
        labelNext: () => "Nächsten Monat anzeigen",
        labelPrevious: () => "Vorheringen Monat anzeigen",
      }}
      captionLayout="dropdown"
      weekStartsOn={0}
      {...props}
    />
  );
}
