import { getGlobalConfig } from "@/payload/fetcher";
import type { MetadataRoute } from "next";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const config = await getGlobalConfig();

  return {
    name: config.title,
    short_name: config.title,
    description: config.subtitle,
    start_url: "/",
    display: "browser",
    background_color: "#f8f5f0",
    theme_color: "#263b3a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
