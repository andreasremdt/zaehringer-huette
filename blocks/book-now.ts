import type { Block } from "payload";

const bookNow: Block = {
  slug: "book-now",
  interfaceName: "BookNowBlock",
  labels: {
    singular: "Buchen",
    plural: "Buchen",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      name: "text",
      type: "textarea",
      label: "Inhalt",
      required: true,
    },
  ],
};

export default bookNow;
