import type { Block } from "payload";

const gallery: Block = {
  slug: "gallery",
  interfaceName: "GalleryBlock",
  labels: {
    singular: "Bildergalerie",
    plural: "Bildergalerie",
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
      name: "images",
      type: "upload",
      label: "Bilder",
      required: true,
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default gallery;
