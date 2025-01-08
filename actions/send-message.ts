"use server";

import config from "@payload-config";
import { getPayload } from "payload";
import z from "zod";

export type FormInputData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

type SendMessageState = {
  success: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  values?: FormInputData;
};

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen an."),
  email: z
    .string()
    .trim()
    .email("Bitte geben Sie eine gültige E-Mail-Adresse an."),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Bitte schreiben Sie etwas mehr Text."),
});

export default async function sendMessage(
  formData: FormInputData,
): Promise<SendMessageState> {
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      values: formData,
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  try {
    const payload = await getPayload({ config });

    await payload.sendEmail({
      to: "me@andreasremdt.com",
      subject: `Anfrage von ${name}`,
      replyTo: email,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "-"}\n\n${message}`,
    });

    await payload.create({
      collection: "messages",
      data: {
        name,
        email,
        message,
        phone,
      },
    });

    return { success: true };
  } catch (ex) {
    return { success: false };
  }
}
