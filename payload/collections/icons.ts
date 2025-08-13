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
  upload: true,
};

export default icons;
