import path from "node:path";
import { fileURLToPath } from "node:url";
import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
