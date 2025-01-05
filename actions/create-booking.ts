"use server";

import config from "@payload-config";
import { getPayload } from "payload";
import type { DateRange } from "react-day-picker";

export type BookingData = {
  name: string;
  email: string;
  phone?: string;
  comments?: string;
  adults: number;
  kids: number;
  range?: DateRange;
};

export default async function createBooking(data: BookingData) {
  const { adults, kids, email, name, comments, phone, range } = data;

  if (!range?.from || !range?.to) {
    return null;
  }

  const payload = await getPayload({ config });
  const result = await payload.create({
    collection: "bookings",
    data: {
      name,
      email,
      adults,
      kids,
      message: comments,
      phone,
      from: range.from.toISOString(),
      to: range.to.toISOString(),
      confirmed: false,
    },
  });

  return result;
}
