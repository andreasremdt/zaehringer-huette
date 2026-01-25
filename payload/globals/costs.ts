import type { GlobalConfig } from "payload";

const costs: GlobalConfig = {
  slug: "costs",
  label: "Kosten & Gebühren",
  fields: [
    {
      type: "group",
      label: "Übernachtung",
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
              name: "personCountPerNight",
              type: "number",
              label: "Gilt für bis zu X Personen",
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
              name: "pricePerExtraPerson",
              type: "number",
              label: "Ab X Personen: Preis pro weitere Person (€)",
              required: true,
              admin: {
                width: "20%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "group",
      label: "Kurtaxe",
      fields: [
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
      ],
    },
    {
      type: "group",
      label: "Rabatt",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "discount",
              type: "number",
              label: "Rabatt (%)",
              required: true,
              admin: {
                width: "20%",
              },
            },
            {
              name: "discountAfterDays",
              type: "number",
              label: "Rabatt ab X Tagen",
              required: true,
              admin: {
                width: "20%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "group",
      label: "Holzpauschale",
      fields: [
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
      ],
    },
    {
      type: "group",
      label: "Sonstige",
      fields: [
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
              name: "deposit",
              type: "number",
              label: "Kaution (€)",
              required: true,
              admin: {
                width: "20%",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default costs;
