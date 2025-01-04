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
    {
      type: "row",
      fields: [
        {
          type: "number",
          name: "adults",
          label: "Erwachsene",
          required: true,
          admin: {
            width: "10%",
          },
        },
        {
          type: "number",
          name: "kids",
          label: "Kinder",
          admin: {
            width: "10%",
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
            width: "20%",
          },
        },
        {
          type: "date",
          name: "to",
          label: "Gebucht bis",
          required: true,
          admin: {
            width: "20%",
          },
        },
      ],
    },
    {
      type: "checkbox",
      name: "confirmed",
      label: "Buchung bestätigt",
    },
    {
      type: "ui",
      name: "calendar",
      label: "Kalender",
      admin: {
        components: {
          Field: "/components/calendar",
        },
        position: "sidebar",
      },
    },
  ],
};

export default bookings;
