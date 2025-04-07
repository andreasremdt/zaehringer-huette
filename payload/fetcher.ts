import config from "@payload-config";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { cache } from "react";

export const getPageBySlug = cache(async function getPageBySlug(slug: string) {
  const { isEnabled } = await draftMode();
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "pages",
    draft: isEnabled,
    pagination: false,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs[0];
});

export const getAllPages = cache(async function getAllPages() {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "pages",
    pagination: false,
    draft: false,
    limit: 1000,
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

export const getGlobalCosts = cache(async function getGlobalCosts() {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: "costs",
  });

  return result;
});
