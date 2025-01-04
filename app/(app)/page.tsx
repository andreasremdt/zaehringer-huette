import BlockRenderer from "@/components/block-renderer";
import { getPageBySlug } from "@/payload/fetcher";

export default async function Page() {
  const page = await getPageBySlug("/");

  return <BlockRenderer blocks={page.layout} />;
}
