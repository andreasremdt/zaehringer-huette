import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

export const getPageBySlug = cache(async function getPageBySlug(slug: string) {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "pages",
    draft: true,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  return result.docs[0];
});

export const getAllPages = cache(async function getAllPages() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "pages",
    pagination: false,
  });

  return result.docs;
});

export const getAllBookings = cache(async function getAllBookings() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "bookings",
    pagination: false,
  });

  return result.docs;
});

export const getGlobalConfig = cache(async function getGlobalConfig() {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: "contact-info",
  });

  return result;
});
