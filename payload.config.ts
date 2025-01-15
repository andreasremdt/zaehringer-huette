import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { nodemailerAdapter } from "@payloadcms/email-nodemailer";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { de } from "@payloadcms/translations/languages/de";
import { en } from "@payloadcms/translations/languages/en";
import { buildConfig } from "payload";
import sharp from "sharp";

import bookings from "@/payload/collections/bookings";
import icons from "@/payload/collections/icons";
import media from "@/payload/collections/media";
import messages from "@/payload/collections/messages";
import pages from "@/payload/collections/pages";
import users from "@/payload/collections/users";
import contactInfo from "@/payload/globals/contact-info";
import costs from "@/payload/globals/costs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media, icons, pages, bookings, messages],
  globals: [contactInfo, costs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: "de",
  },
  email: nodemailerAdapter({
    defaultFromAddress: "no-reply@zaehringer-huette.com",
    defaultFromName: "Zähringer Hütte",
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    },
  }),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
    connectOptions: {
      dbName: process.env.DATABASE_NAME || "",
      appName: process.env.DATABASE_APP_NAME || "",
      retryWrites: true,
      writeConcern: {
        w: "majority",
      },
    },
  }),
  sharp,
  graphQL: {
    disable: true,
  },
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        icons: true,
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
    seoPlugin({
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `${doc.title} - Zähringer Hütte`,
      generateDescription: ({ doc }) => doc.excerpt,
      tabbedUI: true,
    }),
  ],
});
