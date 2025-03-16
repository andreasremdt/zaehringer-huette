"use client";

import { formatDate } from "date-fns";
import type { Data } from "payload";

type Props = {
  data: Data;
};

export default function InvoiceCalendarClient({ data }: Props) {
  async function handleClick() {
    fetch("/next/invoice", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = `Rechnung ${data.invoiceId} vom ${formatDate(new Date(), "dd.MM.yyyy")}.pdf`;

        document.body.append(anchor);
        anchor.click();

        anchor.remove();
        URL.revokeObjectURL(url);
      });
  }

  return (
    <button
      type="button"
      className="btn btn--btn-without-spacing btn--icon-style-without-border btn--size-medium btn--withoutPopup btn--style-primary btn--withoutPopup"
      onClick={handleClick}
    >
      Rechnung herunterladen
    </button>
  );
}
