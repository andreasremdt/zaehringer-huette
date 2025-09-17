"use server";

import type { Booking } from "@/payload-types";
import config from "@payload-config";
import { format } from "date-fns";
import { getPayload } from "payload";

export default async function sendConfirmationEmail(
  booking: Booking,
): Promise<boolean> {
  try {
    const payload = await getPayload({ config });

    await payload.sendEmail({
      to: booking.email,
      from: "info@zaehringer-huette.de",
      subject: "Ihre Reservierung wurde bestätigt",
      replyTo: "info@zaehringer-huette.de",
      text: `Hallo ${booking.name},\n\nihre Reservierung in der Zähringer Hütte vom ${format(booking.from, "dd.MM.yyyy")} bis zum ${format(booking.to, "dd.MM.yyyy")} wurde soeben von uns bestätigt.\nWir freuen uns auf Ihren Besuch!\n\nMit freundlichen Grüßen\n\Familie Effinger\nhttps://zaehringer-huette.de`,
    });

    return true;
  } catch (_ex) {
    return false;
  }
}
