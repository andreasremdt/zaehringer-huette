import clsx, { type ClassValue } from "clsx";
import { addDays, differenceInDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";
import type { Booking } from "@/payload-types";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}

export function getBookedDays(bookings: Booking[]) {
  const bookedDays: Date[] = [];

  for (const booking of bookings) {
    const from = new Date(booking.from);
    const to = new Date(booking.to);
    const length = getNumberOfDays({ from, to }) + 1;

    for (let i = 0; i < length; i++) {
      bookedDays.push(addDays(from, i));
    }
  }

  return bookedDays;
}

export function getNumberOfDays({ from, to }: DateRange) {
  if (!from || !to) {
    return 0;
  }

  return differenceInDays(to, from);
}

export function formatDateRange({ from, to }: DateRange) {
  if (!from || !to) {
    return null;
  }

  return `${format(from, "dd.MM.yyyy")} - ${format(to, "dd.MM.yyyy")} (${getNumberOfDays({ from, to })} Nächte)`;
}

export function formatGuests(adults: number, kids = 0) {
  let str = `${adults} ${adults === 1 ? "Erwachsener" : "Erwachsene"}`;

  if (kids) {
    str += `, ${kids} ${kids === 1 ? "Kind" : "Kinder"}`;
  }

  return str;
}

export function hasEnoughGuests<T extends number>(
  adults?: T,
  kids = 0,
): adults is NonNullable<T> {
  if (!adults || adults < 1) {
    return false;
  }

  if (adults + kids < 4) {
    return false;
  }

  return true;
}

export function hasValidRange<T extends DateRange>(
  range?: T,
): range is NonNullable<T> {
  return Boolean(range?.from) && Boolean(range?.to);
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat("de", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
