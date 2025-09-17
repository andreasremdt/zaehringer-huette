import sendConfirmationEmail from "@/actions/send-confirmation-email";
import type { CollectionConfig } from "payload";

const bookings: CollectionConfig = {
  slug: "bookings",
  labels: {
    plural: "Buchungen",
    singular: "Buchung",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
    update: ({ req: { user } }) => {
      return Boolean(user);
    },
    delete: ({ req: { user } }) => {
      return Boolean(user);
    },
  },
  hooks: {
    afterChange: [
      async ({ doc, previousDoc, operation }) => {
        if (operation !== "update") return;

        const wasNotConfirmed = !previousDoc.confirmed;
        const isNowConfirmed = doc.confirmed;

        if (wasNotConfirmed && isNowConfirmed) {
          await sendConfirmationEmail(doc);
        }
      }
    ]
  },
  fields: [
    {
      type: "checkbox",
      name: "confirmed",
      label: "Buchung bestätigt",
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "collapsible",
      label: "Rechnung",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          type: "text",
          name: "invoiceId",
          label: "Rechnungs-Nr.",
          admin: {
            placeholder: "ZH35",
            description:
              "Die Rechnungs-Nr. wird für die Erstellung der Rechnung benötigt.",
          },
        },
        {
          type: "ui",
          name: "generate-invoice",
          label: "Rechnung",
          admin: {
            condition: (data) => Boolean(data.invoiceId),
            components: {
              Field: "/payload/components/invoice-creator",
            },
          },
        },
        {
          type: 'row',
          fields: [
            {
              type: "text",
              name: "surchargeDescription",
              label: "Aufschlagbeschreibung",
              admin: {
                width: "60%",
                placeholder: "Kurzurlaub"
              },
            },
            {
              type: "number",
              name: "surcharge",
              label: "Aufschlag (in €)",
              admin: {
                width: "40%",
                placeholder: "30,00"
              },
            },
          ]
        },
      ],
    },
    {
      type: "collapsible",
      label: "Kontaktdaten",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          type: "text",
          name: "name",
          label: "Name",
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "email",
              label: "E-Mail-Adresse",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              type: "text",
              name: "phone",
              label: "Telefonnummer",
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Buchungsdaten",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "number",
              name: "adults",
              label: "Erwachsene",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              type: "number",
              name: "kids",
              label: "Kinder",
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "textarea",
          name: "message",
          label: "Anmerkungen / Wünsche",
        },
        {
          type: "row",
          fields: [
            {
              type: "date",
              name: "from",
              label: "Gebucht von",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              type: "date",
              name: "to",
              label: "Gebucht bis",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
    {
      type: "collapsible",
      label: "Adressdaten",
      admin: {
        position: "sidebar",
      },
      fields: [
        {
          type: "text",
          name: "address",
          label: "Straße und Hausnummer",
          required: true,
        },
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "zip",
              label: "Postleitzahl",
              required: true,
              admin: {
                width: "20%",
              },
            },
            {
              type: "text",
              name: "city",
              label: "Stadt",
              required: true,
              admin: {
                width: "79%",
              },
            },
          ],
        },
        {
          type: "text",
          name: "country",
          label: "Land",
          required: true,
        },
      ],
    },
    {
      type: "ui",
      name: "calendar",
      label: "Kalender",
      admin: {
        components: {
          Field: "/payload/components/calendar",
        },
      },
    },
  ],
};

export default bookings;
