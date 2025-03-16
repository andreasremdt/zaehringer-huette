import type { Booking } from "@/payload-types";
import clsx, { type ClassValue } from "clsx";
import { addDays, differenceInDays, format, getMonth } from "date-fns";
import type { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge";

export const TAX_ADULTS = 2.9;
export const TAX_KIDS = 1.2;
export const PRICE_PER_NIGHT = 300;
export const PRICE_PER_EXTRA_GUEST = 35;
export const CLEANING_COSTS = 80;
export const WOOD_COSTS_WINTER = 60;
export const WOOD_COSTS_SUMMER = 30;
export const DISCOUNT = 0.05;
export const DEPOSIT = 200;

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
  const days = getNumberOfDays(range);

  if (!days) {
    return { adultsTax: 0, kidsTax: 0, totalTax: 0 };
  }

  const adultsTax = adults * (days + 1) * TAX_ADULTS;
  const kidsTax = kids * (days + 1) * TAX_KIDS;
  const totalTax = adultsTax + kidsTax;

  return { adultsTax, kidsTax, totalTax };
}

export function getCosts(range: DateRange, adults: number, kids = 0) {
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
  const { totalTax } = getTourismTax(range, adults, kids);
  const wood = getWoodCosts(range);

  if (!costs || !totalTax) {
    return 0;
  }

  return costs + totalTax + wood + CLEANING_COSTS;
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
  if (!range.from) {
    return WOOD_COSTS_WINTER;
  }

  const month = getMonth(range.from);

  return month > 5 && month < 9 ? WOOD_COSTS_SUMMER : WOOD_COSTS_WINTER;
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
