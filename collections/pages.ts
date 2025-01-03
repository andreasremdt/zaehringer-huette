import about from "@/blocks/about";
import amenities from "@/blocks/amenities";
import bookNow from "@/blocks/book-now";
import calendar from "@/blocks/calendar";
import contactForm from "@/blocks/contact-form";
import environment from "@/blocks/environment";
import gallery from "@/blocks/gallery";
import hero from "@/blocks/hero";
import imageHero from "@/blocks/image-hero";
import richText from "@/blocks/rich-text";
import testimonial from "@/blocks/testimonial";
import type { CollectionConfig } from "payload";

const pages: CollectionConfig = {
  slug: "pages",
  labels: {
    plural: "Seiten",
    singular: "Seite",
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Inhalt",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              label: "Seitenname",
            },
            {
              type: "blocks",
              name: "layout",
              label: false,
              labels: {
                singular: "Inhalt",
                plural: "Inhalt",
              },
              blocks: [
                about,
                amenities,
                bookNow,
                contactForm,
                environment,
                gallery,
                hero,
                testimonial,
                richText,
                calendar,
                imageHero,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      type: "text",
      required: true,
      label: "Slug",
      admin: {
        position: "sidebar",
        description:
          "Der Slug dient zur Identifizierung der Seite und sollte nicht geändert werden.",
      },
    },
  ],
};

export default pages;
