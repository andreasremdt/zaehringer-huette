import type { Block } from "payload";

const testimonial: Block = {
  slug: "testimonial",
  interfaceName: "TestimonialBlock",
  labels: {
    singular: "Bewertungen",
    plural: "Bewertungen",
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
    {
      type: "array",
      name: "items",
      fields: [
        {
          name: "text",
          type: "textarea",
          label: "Bewertung",
          required: true,
          admin: {
            description:
              "Die Bewertung des Kunden, etwa von Google oder Trustpilot.",
          },
        },
        {
          name: "author",
          type: "text",
          label: "Reviewer",
          required: true,
          admin: {
            description: "Der Name des Autors der Bewertung.",
          },
        },
      ],
    },
  ],
};

export default testimonial;
