"use client";

import { useDocumentInfo } from "@payloadcms/ui";
import { formatDate } from "date-fns";

export default function InvoiceCreator() {
  const { data } = useDocumentInfo();

  async function handleClick() {
    if (!data) return;

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
