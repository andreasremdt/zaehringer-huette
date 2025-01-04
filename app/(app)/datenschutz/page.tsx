import BlockRenderer from "@/components/block-renderer";
import { getGlobalConfig, getPageBySlug } from "@/payload/fetcher";
import type { Metadata } from "next";

export default async function Page() {
  const page = await getPageBySlug("/datenschutz");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h1 className="mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
        {page.title}
      </h1>

      <BlockRenderer blocks={page.layout} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("/datenschutz");
  const config = await getGlobalConfig();

  if (!page.meta) {
    return {};
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
    authors: [{ name: "Andreas Remdt", url: "https://andreasremdt.com" }],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
    openGraph: {
      title: page.meta.title as string,
      description: page.meta.description as string,
      url: process.env.NEXT_PUBLIC_SERVER_URL,
      siteName: config.title,
      images:
        typeof page.meta.image !== "string"
          ? (page.meta.image?.url as string)
          : undefined,
      locale: "de-DE",
    },
  };
}
