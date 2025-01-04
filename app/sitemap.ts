import { getAllPages } from "@/payload/fetcher";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages();

  return pages.map((page) => ({
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}${page.slug}`,
    lastModified: page.updatedAt,
    changeFrequency: "yearly",
    priority: page.slug === "/" ? 1 : 0.8,
  }));
}
