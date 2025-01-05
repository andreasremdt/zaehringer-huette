import generatePreviewPath from "@/lib/generate-preview-path";
import { revalidateDelete, revalidatePage } from "@/lib/revalidate-page";
import about from "@/payload/blocks/about";
import amenities from "@/payload/blocks/amenities";
import bookNow from "@/payload/blocks/book-now";
import calendar from "@/payload/blocks/calendar";
import contactForm from "@/payload/blocks/contact-form";
import environment from "@/payload/blocks/environment";
import gallery from "@/payload/blocks/gallery";
import hero from "@/payload/blocks/hero";
import imageHero from "@/payload/blocks/image-hero";
import richText from "@/payload/blocks/rich-text";
import testimonial from "@/payload/blocks/testimonial";
import type { CollectionConfig } from "payload";

const pages: CollectionConfig = {
  slug: "pages",
  labels: {
    plural: "Seiten",
    singular: "Seite",
  },
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        req,
      }),
  },
  hooks: {
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
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
