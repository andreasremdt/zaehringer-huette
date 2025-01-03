import type { CollectionConfig } from "payload";

const icons: CollectionConfig = {
  slug: "icons",
  labels: {
    singular: "Grafik",
    plural: "Grafiken",
  },
  access: {
    read: () => true,
  },
  fields: [],
  upload: {
    staticDir: "public/icons",
  },
};

export default icons;
