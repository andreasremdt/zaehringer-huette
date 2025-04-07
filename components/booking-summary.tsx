"use client";

import costsCalculator from "@/lib/costs-calculator";
import {
  formatCurrency,
  formatDateRange,
  formatGuests,
  hasEnoughGuests,
  hasValidRange,
} from "@/lib/utils";
import type { Cost } from "@/payload-types";
import type { DateRange } from "react-day-picker";

type Props = {
  costs: Cost;
  range?: DateRange;
  adults?: number;
  kids?: number;
  error?: string;
};

export default function BookingSummary({
  range,
  adults,
  costs,
  kids,
  error,
}: Props) {
  if (error) {
    return <p className="text-sm text-red-500">{error}</p>;
  }

  if (!hasValidRange(range)) {
    return null;
  }

  const calculator = costsCalculator(costs);

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
                {formatCurrency(calculator.getCosts(range, adults, kids))}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Kurtaxe</span>
              <span className="text-right font-bold">
                {formatCurrency(
                  calculator.getTourismTax(range, adults, kids).totalTax,
                )}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Holzpauschale</span>
              <span className="text-right font-bold">
                {formatCurrency(calculator.getWoodCosts(range))}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Endreinigung</span>
              <span className="text-right font-bold">
                {formatCurrency(calculator.getCleaningFee())}
              </span>
            </li>
            {calculator.hasDiscount(range) ? (
              <li className="flex items-center justify-between">
                <span>5% Rabatt</span>
                <span className="text-right font-bold">
                  -{formatCurrency(calculator.getDiscount(range, adults, kids))}
                </span>
              </li>
            ) : null}
            <li className="mt-2 flex items-center justify-between border-t border-stone-300 pt-2">
              <span>Gesamtkosten</span>
              <span className="text-right font-bold">
                {formatCurrency(calculator.getTotalCosts(range, adults, kids))}
              </span>
            </li>
          </>
        ) : null}
      </ul>
    </>
  );
}
