import type { Page } from "@/payload-types";
import { revalidatePath } from "next/cache";
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === "published") {
      revalidatePath(doc.slug === "home" ? "/" : `/${doc.slug}`);
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === "published" && doc._status !== "published") {
      revalidatePath(
        previousDoc.slug === "home" ? "/" : `/${previousDoc.slug}`,
      );
    }
  }

  return doc;
};

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePath(doc?.slug === "home" ? "/" : `/${doc?.slug}`);
  }

  return doc;
};
