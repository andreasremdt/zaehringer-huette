import type { Block } from "payload";

const calendar: Block = {
  slug: "calendar",
  interfaceName: "CalendarBlock",
  labels: {
    singular: "Buchungskalender",
    plural: "Buchungskalender",
  },
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
      label: false,
      admin: {
        description:
          "Hier können zusätzliche Informationen zur Buchung erwähnt werden.",
      },
    },
  ],
};

export default calendar;
