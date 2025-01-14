import type { PayloadRequest } from "payload";

type Props = {
  collection: string;
  slug: string;
  req: PayloadRequest;
};

const generatePreviewPath = ({ collection, slug, req }: Props) => {
  const params = {
    slug,
    collection,
    path: `/${slug}`,
  };

  const encodedParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    encodedParams.append(key, value);
  }

  const isProduction =
    process.env.NODE_ENV === "production" ||
    Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  const protocol = isProduction ? "https:" : req.protocol;

  const url = `${protocol}//${req.host}/next/preview?${encodedParams.toString()}`;

  return url;
};

export default generatePreviewPath;
