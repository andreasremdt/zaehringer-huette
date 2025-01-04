import type { Block } from "payload";

const hero: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: {
    singular: "Heroes",
    plural: "Hero",
  },
  fields: [
    {
      name: "pretitle",
      type: "text",
      label: "Einführung der Überschrift",
      admin: {
        description:
          "Dieser Text taucht vor der Überschrift auf und dient als Einleitung.",
      },
    },
    {
      name: "title",
      type: "text",
      label: "Überschrift",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Bild",
    },
  ],
};

export default hero;
