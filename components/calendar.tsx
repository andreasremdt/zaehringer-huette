"use client";

import { de } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import Icon from "./icon";

export default function Calendar() {
  return (
    <DayPicker
      mode="single"
      locale={de}
      labels={{
        labelNext: () => "Nächsten Monat anzeigen",
        labelPrevious: () => "Vorheringen Monat anzeigen",
      }}
      classNames={{
        week: "react-datepicker__week",
        day: "react-datepicker__day",
      }}
      // classNames={{
      //   selected: "bg-secondary-950 text-white border-secondary-950",
      //   months: "flex flex-col md:flex-row relative gap-8",
      //   month: "md:w-1/2 mt-2",
      //   nav: "absolute flex justify-between w-full",
      //   month_grid: "w-full table-fixed border-spacing-2 border-separate",
      //   month_caption: "text-center mb-4",
      //   caption_label: "font-semibold text-lg",
      //   day: "rounded-full transition-colors duration-300 ease-in-out",
      //   button_previous: "rotate-180 p-2",
      //   button_next: "p-2",
      //   day_button:
      //     "flex items-center justify-center aspect-square w-full disabled:cursor-not-allowed",
      //   disabled: "text-stone-400",
      //   hidden: "invisible",
      // }}
    />
  );
}
