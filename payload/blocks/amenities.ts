import type { Block } from "payload";

const amenities: Block = {
  slug: "amenities",
  interfaceName: "AmenitiesBlock",
  labels: {
    singular: "Ausstattung",
    plural: "Ausstattung",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      name: "groups",
      type: "array",
      label: "Ausstattung",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Bezeichnung",
          required: true,
        },
        {
          name: "items",
          type: "array",
          label: "Einträge",
          required: true,
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name der Ausstattung",
              required: true,
            },
            {
              name: "icon",
              type: "upload",
              label: "Icon",
              required: true,
              relationTo: "icons",
              hasMany: false,
            },
          ],
        },
      ],
    },
  ],
};

export default amenities;
