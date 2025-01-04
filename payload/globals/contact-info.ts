import type { GlobalConfig } from "payload";

const contactInfo: GlobalConfig = {
  slug: "contact-info",
  label: "Kontaktdaten",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Allgemein",
          fields: [
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "title",
                  label: "Titel der Seite",
                  required: true,
                  admin: {
                    description:
                      "Der Titel wird im Browser, in den Suchergebnissen und in der Navigation angezeigt.",
                  },
                },
                {
                  type: "text",
                  name: "subtitle",
                  label: "Sub-Überschrift",
                  required: true,
                  admin: {
                    description:
                      "Dieser Text wird unterhalb des Titels angezeigt.",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Anschrift",
          fields: [
            {
              type: "text",
              name: "street",
              label: "Straße & Hausnummer",
              required: true,
            },
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "zip",
                  label: "Postleitzahl",
                  required: true,
                  admin: {
                    width: "30%",
                  },
                },
                {
                  type: "text",
                  name: "city",
                  label: "Stadt",
                  required: true,
                  admin: {
                    width: "70%",
                  },
                },
              ],
            },
            {
              type: "text",
              name: "country",
              label: "Land",
              required: true,
            },
          ],
        },
        {
          label: "Kontakt",
          fields: [
            {
              type: "row",
              fields: [
                {
                  type: "text",
                  name: "phone",
                  label: "Telefon",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
                {
                  type: "text",
                  name: "email",
                  label: "E-Mail",
                  required: true,
                  admin: {
                    width: "50%",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default contactInfo;
