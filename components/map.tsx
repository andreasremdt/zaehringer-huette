"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/leaflet-map"), {
  ssr: false,
});

export default LeafletMap;