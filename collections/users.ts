import type { CollectionConfig } from "payload";

const users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [],
};

export default users;
