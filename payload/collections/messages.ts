import type { CollectionConfig } from "payload";

const messages: CollectionConfig = {
  slug: "messages",
  labels: {
    plural: "Nachrichten",
    singular: "Nachricht",
  },
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => false,
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
    update: () => false,
    delete: ({ req: { user } }) => {
      return Boolean(user);
    },
  },
  fields: [
    {
      type: "text",
      name: "name",
      label: "Name",
      admin: {
        readOnly: true,
      },
    },
    {
      type: "row",
      fields: [
        {
          type: "text",
          name: "email",
          label: "E-Mail-Adresse",
          admin: {
            width: "50%",
            readOnly: true,
          },
        },
        {
          type: "text",
          name: "phone",
          label: "Telefonnummer",
          admin: {
            width: "50%",
            readOnly: true,
          },
        },
      ],
    },
    {
      type: "textarea",
      name: "message",
      label: "Nachricht",
      admin: {
        readOnly: true,
      },
    },
  ],
};

export default messages;
