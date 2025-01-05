import BlockRenderer from "@/components/block-renderer";
import LivePreview from "@/components/live-preview";
import { getSlugFromParams } from "@/lib/utils";
import { getAllPages, getGlobalConfig, getPageBySlug } from "@/payload/fetcher";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const slug = getSlugFromParams((await params).slug);
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const isTextOnly =
    page.layout?.length === 1 && page.layout[0].blockType === "rich-text";

  if (isTextOnly) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <BlockRenderer blocks={page.layout} />
        <LivePreview />
      </div>
    );
  }

  return (
    <>
      <LivePreview />
      <BlockRenderer blocks={page.layout} />
    </>
  );
}

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page) => ({
    slug: [page.slug],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = getSlugFromParams((await params).slug);
  const page = await getPageBySlug(slug);
  const config = await getGlobalConfig();

  if (!page?.meta) {
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
