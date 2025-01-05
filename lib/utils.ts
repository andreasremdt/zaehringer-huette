import type { Booking } from "@/payload-types";
import clsx, { type ClassValue } from "clsx";
import { addDays, differenceInDays, format, getMonth } from "date-fns";
import type { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";

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

export function getTourismTax(range: DateRange, adults: number, kids = 0) {
  const TAX_ADULTS = 2.9;
  const TAX_KIDS = 1.2;

  const days = getNumberOfDays(range);

  if (!days) {
    return 0;
  }

  return adults * (days + 1) * TAX_ADULTS + kids * (days + 1) * TAX_KIDS;
}

export function getCosts(range: DateRange, adults: number, kids = 0) {
  const PRICE_PER_NIGHT = 300;
  const PRICE_PER_EXTRA_GUEST = 35;

  const totalGuests = adults + kids - 4;
  const days = getNumberOfDays(range);

  if (totalGuests < 0 || !days) {
    return 0;
  }

  const basePrice = PRICE_PER_NIGHT * days;
  const additionalGuestsPrice = PRICE_PER_EXTRA_GUEST * days * totalGuests;

  return basePrice + additionalGuestsPrice;
}

export function getTotalCosts(range: DateRange, adults: number, kids = 0) {
  const costs = getCosts(range, adults, kids);
  const tax = getTourismTax(range, adults, kids);
  const wood = getWoodCosts(range);
  const cleaning = 80;

  if (!costs || !tax) {
    return 0;
  }

  return costs + tax + wood + cleaning;
}

export function getDiscount(range: DateRange, adults: number, kids = 0) {
  const DISCOUNT = 0.05;

  if (hasDiscount(range)) {
    return getTotalCosts(range, adults, kids) * DISCOUNT;
  }

  return 0;
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

export function getWoodCosts(range: DateRange) {
  const COSTS_WINTER = 60;
  const COSTS_SUMMER = 30;

  if (!range.from) {
    return COSTS_WINTER;
  }

  const month = getMonth(range.from);

  return month > 5 && month < 9 ? COSTS_SUMMER : COSTS_WINTER;
}

export function hasValidRange<T extends DateRange>(
  range?: T,
): range is NonNullable<T> {
  return Boolean(range?.from) && Boolean(range?.to);
}

export function hasDiscount(range: DateRange) {
  return getNumberOfDays(range) > 4;
}

export function formatCurrency(value: number) {
  return Intl.NumberFormat("de", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
