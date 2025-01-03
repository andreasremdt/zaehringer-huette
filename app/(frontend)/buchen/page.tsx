import BlockRenderer from "@/components/block-renderer";
import { getPageBySlug } from "@/lib/fetcher";

export default async function Page() {
  const page = await getPageBySlug("/buchen");

  return <BlockRenderer blocks={page.layout} />;
}
