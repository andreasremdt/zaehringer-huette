import {
  formatCurrency,
  formatDateRange,
  formatGuests,
  getCosts,
  getDiscount,
  getTotalCosts,
  getTourismTax,
  getWoodCosts,
  hasDiscount,
  hasEnoughGuests,
  hasValidRange,
} from "@/lib/utils";
import type { DateRange } from "react-day-picker";

type Props = {
  range?: DateRange;
  adults?: number;
  kids?: number;
  error?: string;
};

export default function BookingSummary({ range, adults, kids, error }: Props) {
  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }

  if (!hasValidRange(range)) {
    return null;
  }

  return (
    <>
      <h4 className="font-serif text-xl md:text-2xl">Zusammenfassung</h4>

      <ul className="space-y-2 text-sm">
        <li>
          <b>Zeitraum:</b> {formatDateRange(range)}
        </li>
        {hasEnoughGuests(adults, kids) ? (
          <>
            <li className="mb-2 border-b border-stone-300 pb-2">
              <b>Gäste:</b> {formatGuests(adults, kids)}
            </li>
            <li className="flex items-center justify-between">
              <span>Übernachtungskosten</span>
              <span className="text-right font-bold">
                {formatCurrency(getCosts(range, adults, kids))}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Kurtaxe</span>
              <span className="text-right font-bold">
                {formatCurrency(getTourismTax(range, adults, kids).totalTax)}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Holzpauschale</span>
              <span className="text-right font-bold">
                {formatCurrency(getWoodCosts(range))}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Endreinigung</span>
              <span className="text-right font-bold">{formatCurrency(80)}</span>
            </li>
            {hasDiscount(range) ? (
              <li className="flex items-center justify-between">
                <span>5% Rabatt</span>
                <span className="text-right font-bold">
                  -{formatCurrency(getDiscount(range, adults, kids))}
                </span>
              </li>
            ) : null}
            <li className="mt-2 flex items-center justify-between border-t border-stone-300 pt-2">
              <span>Gesamtkosten</span>
              <span className="text-right font-bold">
                {formatCurrency(
                  getTotalCosts(range, adults, kids) -
                    getDiscount(range, adults, kids),
                )}
              </span>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
}
