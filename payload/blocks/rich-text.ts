import type { Block } from "payload";

const richText: Block = {
  slug: "rich-text",
  interfaceName: "RichTextBlock",
  labels: {
    singular: "Freitext",
    plural: "Freitext",
  },
  fields: [
    {
      name: "content",
      type: "richText",
      label: false,
    },
  ],
};

export default richText;
