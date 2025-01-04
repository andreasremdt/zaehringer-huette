import type { CollectionConfig } from "payload";

const media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Bild",
    plural: "Bilder",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Bildbeschreibung",
      admin: {
        description:
          "Die Bildbeschreibung ist für Suchmaschinen und Menschen mit Sehbehinderung notwendig. Sie taucht auf der Webseite nicht auf und sollte nur das Bild beschreiben.",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "Bildunterschrift",
      admin: {
        description:
          "Die Bildunterschrift wird auf der Webseite oder in der Gallerie angezeigt und kann beliebigen Text beeinhalten.",
      },
    },
  ],
  upload: {
    staticDir: "public/images",
  },
};

export default media;
