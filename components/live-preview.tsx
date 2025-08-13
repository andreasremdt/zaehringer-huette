"use client";

import { RefreshRouteOnSave } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import { getClientSideURL } from "@/lib/get-url";

export default function LivePreview() {
  const router = useRouter();

  return (
    <RefreshRouteOnSave
      refresh={router.refresh}
      serverURL={getClientSideURL()}
    />
  );
}
