"use server";

import config from "@payload-config";
import { format } from "date-fns";
import { getPayload } from "payload";
import type { DateRange } from "react-day-picker";
import z from "zod";

export type BookingData = {
  name: string;
  email: string;
  phone?: string;
  comments?: string;
  adults: number;
  kids: number;
  range?: DateRange;
  address?: string;
};

type SendMessageState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    comments?: string[];
    adults?: string[];
    range?: string[];
  };
  values?: BookingData;
};

const createBookingSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().trim().optional(),
  comments: z.string().trim().optional(),
  adults: z.number().min(1, "Die Mindestzahl der Gäste beträgt 4."),
  kids: z.number().optional(),
  range: z.object(
    {
      from: z.date(),
      to: z.date(),
    },
    {
      required_error:
        "Bitte wählen Sie den gewünschten Zeitraum im Kalendar aus.",
    },
  ),
});

export default async function createBooking(
  formData: BookingData,
): Promise<SendMessageState> {
  // Honeypot spam prevention
  if (formData.address) {
    return { success: false };
  }

  const validatedFields = createBookingSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      values: formData,
    };
  }

  const { name, email, phone, comments, adults, kids, range } =
    validatedFields.data;

  try {
    const payload = await getPayload({ config });

    await payload.sendEmail({
      to: "me@andreasremdt.com",
      subject: `Reservierung von ${name}`,
      replyTo: email,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "-"}\nErwachsene: ${adults}\nKinder: ${kids || "-"}\nZeitraum: ${format(range.from, "dd.MM.yyyy")} - ${format(range.to, "dd.MM.yyyy")}\n\n${comments}`,
    });

    await payload.create({
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

    return { success: true };
  } catch (ex) {
    return { success: false };
  }
}
