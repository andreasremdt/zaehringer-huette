import type { PayloadRequest } from "payload";

type Props = {
  slug: string;
  req: PayloadRequest;
};

export default function generatePreviewPath({ slug, req }: Props) {
  const isProduction =
    process.env.NODE_ENV === "production" ||
    Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  const protocol = isProduction ? "https:" : req.protocol;

  return `${protocol}//${req.host}/${slug}`;
}
