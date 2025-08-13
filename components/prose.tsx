import { RichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextBlock } from "@/payload-types";

type Props = RichTextBlock;

export default function Prose({ content }: Props) {
  if (!content) {
    return null;
  }

  return (
    <RichText
      data={content}
      className="prose prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal prose-h1:text-5xl"
    />
  );
}
