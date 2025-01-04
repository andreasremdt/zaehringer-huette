import type { Block } from "payload";

const about: Block = {
  slug: "about",
  interfaceName: "AboutBlock",
  labels: {
    singular: "Über die Hütte",
    plural: "Über die Hütte",
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
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Bild",
      hasMany: true,
      maxRows: 3,
      minRows: 3,
      admin: {
        description: "Es müssen genau 3 Bilder ausgewählt werden.",
      },
    },
  ],
};

export default about;
