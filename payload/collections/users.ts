import type { CollectionConfig } from "payload";

const users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: "Benutzer",
    singular: "Benutzer",
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [],
};

export default users;
