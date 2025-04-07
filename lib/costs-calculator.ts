import type { Cost } from "@/payload-types";
import { getMonth } from "date-fns";
import type { DateRange } from "react-day-picker";
import { getNumberOfDays } from "./utils";

export default function costsCalculator(costs: Cost) {
  return {
    getCosts(range: DateRange, adults: number, kids = 0) {
      const totalGuests = adults + kids - 4;
      const days = getNumberOfDays(range);

      if (totalGuests < 0 || !days) return 0;

      return (
        costs.pricePerNight * days +
        costs.pricePerExtraPerson * days * totalGuests
      );
    },

    getTourismTax(range: DateRange, adults: number, kids = 0) {
      const days = getNumberOfDays(range);

      if (!days) return { adultsTax: 0, kidsTax: 0, totalTax: 0 };

      const adultsTax = adults * (days + 1) * costs.taxAdults;
      const kidsTax = kids * (days + 1) * costs.taxKids;
      const totalTax = adultsTax + kidsTax;

      return { adultsTax, kidsTax, totalTax };
    },

    getWoodCosts(range: DateRange) {
      if (!range.from) return costs.woodCostsWinter;

      const month = getMonth(range.from);

      return month > 5 && month < 9
        ? costs.woodCostsSummer
        : costs.woodCostsWinter;
    },

    getCleaningFee() {
      return costs.cleaningFee;
    },

    hasDiscount(range: DateRange) {
      return getNumberOfDays(range) > 4;
    },

    getDiscount(range: DateRange, adults: number, kids = 0): number {
      const discount = costs.discount / 100;

      if (this.hasDiscount(range)) {
        return this.getTotalCosts(range, adults, kids) * discount;
      }

      return 0;
    },

    getTotalCosts(range: DateRange, adults: number, kids = 0) {
      const costs = this.getCosts(range, adults, kids);
      const { totalTax } = this.getTourismTax(range, adults, kids);
      const wood = this.getWoodCosts(range);
      const cleaningFee = this.getCleaningFee();
      const discount = this.getDiscount(range, adults, kids);

      if (!costs || !totalTax) return 0;

      return costs + totalTax + wood + cleaningFee - discount;
    },
  };
}
