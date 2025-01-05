import { getClientSideURL } from "@/lib/get-url";
import NextImage, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src?: string | null;
};

export default function Image({ src, ...props }: Props) {
  if (!src) {
    return null;
  }

  return <NextImage src={`${getClientSideURL()}${src}`} {...props} />;
}
