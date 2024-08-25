"use client";

import { type DateRange, DayPicker } from "react-day-picker";
import { de } from "date-fns/locale";
import { add } from "date-fns";
import Icon from "@/components/icon";
import useMediaQuery from "@/hooks/use-media-query";

type Props = {
  selected?: DateRange;
  onSelect?(range?: DateRange): void;
  disabled?: Date[];
};

export default function DatePicker({
  selected,
  onSelect,
  disabled = [],
}: Props) {
  const isMobile = useMediaQuery(768);

  return (
    <DayPicker
      mode="range"
      locale={de}
      selected={selected}
      onSelect={onSelect}
      numberOfMonths={isMobile ? 1 : 2}
      min={3}
      disabled={[{ before: add(new Date(), { days: 1 }) }, ...disabled]}
      components={{
        Chevron: () => <Icon name="right" className="size-6" />,
      }}
      labels={{
        labelNext: () => "Nächsten Monat anzeigen",
        labelPrevious: () => "Vorheringen Monat anzeigen",
      }}
      classNames={{
        selected: "bg-secondary-950 text-white border-secondary-950",
        months: "flex flex-col md:flex-row relative gap-8",
        month: "md:w-1/2 mt-2",
        nav: "absolute flex justify-between w-full",
        month_grid: "w-full table-fixed border-spacing-2 border-separate",
        month_caption: "text-center mb-4",
        caption_label: "font-semibold text-lg",
        day: "rounded-full",
        button_previous: "rotate-180 p-2",
        button_next: "p-2",
        day_button:
          "flex items-center justify-center aspect-square w-full disabled:cursor-not-allowed",
        disabled: "text-stone-400",
        hidden: "invisible",
      }}
    />
  );
}
