import type { Block } from "payload";

const imageHero: Block = {
  slug: "image-hero",
  interfaceName: "ImageHeroBlock",
  labels: {
    singular: "Hero mit Bildern",
    plural: "Hero mit Bildern",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Titel",
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
      maxRows: 5,
      minRows: 5,
    },
  ],
};

export default imageHero;
