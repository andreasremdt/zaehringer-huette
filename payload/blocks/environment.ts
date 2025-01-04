import type { Block } from "payload";

const environment: Block = {
  slug: "environment",
  interfaceName: "EnvironmentBlock",
  labels: {
    singular: "Umgebung",
    plural: "Umgebung",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      type: "array",
      name: "items",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Bezeichnung",
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          label: "Beschreibung",
          required: true,
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "Bild",
          hasMany: false,
        },
      ],
    },
  ],
};

export default environment;
