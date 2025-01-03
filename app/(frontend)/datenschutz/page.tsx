import BlockRenderer from "@/components/block-renderer";
import { getPageBySlug } from "@/lib/fetcher";

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
