import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import bookings from "@/payload/collections/bookings";
import icons from "@/payload/collections/icons";
import media from "@/payload/collections/media";
import pages from "@/payload/collections/pages";
import users from "@/payload/collections/users";
import contactInfo from "@/payload/globals/contact-info";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: process.env.NEXT_PUBLIC_SERVER_URL || "",
      collections: ["pages"],
      globals: ["contact-info"],
    },
  },
  collections: [users, media, icons, pages, bookings],
  globals: [contactInfo],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  graphQL: {
    disable: true,
  },
  plugins: [
    seoPlugin({
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `${doc.title} - Zähringer Hütte`,
      generateDescription: ({ doc }) => doc.excerpt,
      tabbedUI: true,
    }),
  ],
});
