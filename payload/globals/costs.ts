import type { GlobalConfig } from "payload";

const costs: GlobalConfig = {
  slug: "costs",
  label: "Kosten & Gebühren",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "pricePerNight",
          type: "number",
          label: "Preis pro Nacht (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "pricePerExtraPerson",
          type: "number",
          label: "Preis pro weitere Person (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "taxAdults",
          type: "number",
          label: "Kurtaxe Erwachsene (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "taxKids",
          type: "number",
          label: "Kurtaxe Kinder (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "woodCostsWinter",
          type: "number",
          label: "Holzpauschale Winter (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "woodCostsSummer",
          type: "number",
          label: "Holzpauschale Sommer (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "cleaningFee",
          type: "number",
          label: "Endreinigung (€)",
          required: true,
          admin: {
            width: "20%",
          },
        },
        {
          name: "discount",
          type: "number",
          label: "Rabatt bei mehr als 5 Tagen (%)",
          required: true,
          admin: {
            width: "20%",
          },
        },
      ],
    },
  ],
};

export default costs;
