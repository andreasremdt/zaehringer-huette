import BlockRenderer from "@/components/block-renderer";
import LivePreview from "@/components/live-preview";
import { getPageBySlug } from "@/lib/fetcher";

export default async function Page() {
  const page = await getPageBySlug("/");

  return (
    <>
      <BlockRenderer blocks={page.layout} />
      <LivePreview />
    </>
  );
}
