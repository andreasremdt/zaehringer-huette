import { format } from "date-fns";
import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import costsCalculator from "@/lib/costs-calculator";
import { formatCurrency, formatDateRange } from "@/lib/utils";
import { getGlobalCosts } from "@/payload/fetcher";

export async function POST(request: Request) {
  const doc = new PDFDocument();
  const chunks: Buffer[] = [];

  const data = await request.json();
  const costs = await getGlobalCosts();
  const calculator = costsCalculator(costs);

  doc.on("data", (chunk) => chunks.push(chunk));

  // Header
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .text("Dr. Günther Effinger", { continued: true })
    .text("Zähringer Hütte Feldberg", { align: "right" })
    .font("Helvetica")
    .text("Marzellerweg 15", { continued: true })
    .text("Dr. Freddy Stober Weg 8", { align: "right" })
    .text("D-79379 Müllheim");

  // Customer details
  doc
    .moveDown(1)
    .text(data.name, { continued: true })
    .text(`Rechnungs-Nr.:    ${data.invoiceId}-${new Date().getFullYear()}`, {
      align: "right",
    })
    .text(data.address, { continued: true })
    .text(`Datum:      ${format(data.createdAt, "dd.MM.yyyy")}`, {
      align: "right",
    })
    .text(`${data.zip} ${data.city}, ${data.country}`)
    .text(`E-Mail: ${data.email}`);

  if (data.phone) {
    doc.text(`Telefon: ${data.phone}`);
  }

  // Invoice Intro
  doc
    .moveDown(2)
    .font("Helvetica-Bold")
    .fontSize(14)
    .text("Rechnung")
    .moveDown(1)
    .fontSize(12)
    .text("Für die Miete der Zähringer Hütte")
    .font("Helvetica")
    .text(
      `für den Zeitraum ${formatDateRange({ from: data.from, to: data.to })}`,
    )
    .text(
      "erlaube ich mir wie mit Ihnen vereinbart folgenden Betrag in Rechnung zu stellen:",
    );

  const peopleCosts = calculator.getCosts(
    { from: data.from, to: data.to },
    data.adults,
    data.kids,
  );
  const totalCosts = calculator.getTotalCosts(
    { from: data.from, to: data.to },
    data.adults,
    data.kids,
    data.surcharge,
  );
  const woodCosts = calculator.getWoodCosts({ from: data.from, to: data.to });
  const { adultsTax, kidsTax } = calculator.getTourismTax(
    { from: data.from, to: data.to },
    data.adults,
    data.kids,
  );
  const discount = calculator.getDiscount(
    { from: data.from, to: data.to },
    data.adults,
    data.kids,
  );
  const cleaningFee = calculator.getCleaningFee();
  const vat = totalCosts * 0.07;
  const totalBeforeVat = totalCosts - vat;

  // Invoice Positions
  doc
    .moveDown(2)
    .font("Helvetica-Bold")
    .text(`${data.adults} Erwachsene, ${data.kids} Kinder`, { continued: true })
    .text(`${formatCurrency(peopleCosts)}`, { align: "right" })
    .text("Putzpauschale", { continued: true })
    .text(formatCurrency(cleaningFee), { align: "right" })
    .text("Holzpauschale", { continued: true })
    .text(formatCurrency(woodCosts), {
      align: "right",
      underline: true,
    })
    .text("Zwischensumme", { continued: true })
    .text(formatCurrency(peopleCosts + cleaningFee + woodCosts), {
      align: "right",
    })
    .moveDown(1)
    .text("Kurtaxe");

  if (data.surcharge) {
    doc
      .text(data.surchargeDescription || "Sonderaufschlag", { continued: true })
      .text(formatCurrency(data.surcharge), {
        align: "right",
      });
  }
    
  doc
    .text(
      `Anzahl Kinder:           ${data.kids} à ${formatCurrency(costs.taxKids)}`,
      {
        continued: true,
      },
    )
    .text(formatCurrency(kidsTax), { align: "right" })
    .text(
      `Anzahl Erwachsene: ${data.adults} à ${formatCurrency(costs.taxAdults)}`,
      {
        continued: true,
      },
    )
    .text(formatCurrency(adultsTax), {
      align: "right",
      underline: discount === 0,
    });

  if (discount > 0) {
    doc
      .text("5% Rabatt bei mehr als 5 Tagen", { continued: true })
      .text(`- ${formatCurrency(discount)}`, {
        underline: true,
        align: "right",
      });
  }

  doc
    .text("Gesamtbetrag", { continued: true })
    .text(formatCurrency(totalCosts), { align: "right" })
    .font("Helvetica")
    .text("In dem Betrag sind 7% Mehrwertsteuer enthalten", {
      continued: true,
    })
    .text(formatCurrency(vat), { align: "right" })
    .text("Rechnungsbetrag netto", { continued: true })
    .text(formatCurrency(totalBeforeVat), { align: "right" })
    .moveDown(1)
    .text("Zuzüglich einer Kaution von", { continued: true })
    .text(formatCurrency(costs.deposit), { align: "right" })
    .font("Helvetica-Bold")
    .text("Gesamtüberweisungsbetrag", { continued: true })
    .text(formatCurrency(totalCosts + costs.deposit), { align: "right" });

  doc
    .moveDown(1)
    .font("Helvetica")
    .text(
      "Der Stromverbrauch wird nach Abreise mit 40 ct/kwh verrechnet. Bitte Anfangs- und Endstände mitteilen.",
    )
    .moveDown(1)
    .text("Mit freundlichen Grüßen")
    .text("Dr. Günther Effinger")
    .moveDown(1)
    .text(
      "Bitte überweisen Sie die Rechnungssumme vorab, damit Ihre Buchung aktiviert werden kann.",
    );

  doc
    .moveDown(1)
    .fontSize(8)
    .text(
      "Dr. Günther Effinger                    Tel.: 07631 938070                     Sparkasse Zollernalb",
    )
    .text(
      "www.zaehringer-huette.de          Fax: 07631 705021                     IBAN: DE65 6535 1260 1140 0510 35",
    )
    .text(
      "                                                                                                       BIC: SOLADES1BAL",
    );

  // Finalize
  doc.end();

  await new Promise((resolve) => doc.on("end", resolve));

  return new NextResponse(Buffer.concat(chunks), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=invoice.pdf",
    },
  });
}
