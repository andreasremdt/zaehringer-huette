import type { Block } from "payload";

const contactForm: Block = {
  slug: "contact-form",
  interfaceName: "ContactFormBlock",
  labels: {
    singular: "Kontaktformular",
    plural: "Kontaktformular",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Beschreibung",
      required: true,
    },
  ],
};

export default contactForm;
