"use client";

import marker from "@/public/marker-icon.png";
import markerShadow from "@/public/marker-shadow.png";
import { type ComponentProps, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

type Props = ComponentProps<"div">;

export default function LeafletMap(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function init() {
      if (!ref.current) {
        return;
      }

      const leaflet = (await import("leaflet")).default;

      const map = leaflet
        .map(ref.current, {
          scrollWheelZoom: false,
        })
        .setView([47.851272, 8.029753], 17);

      const icon = leaflet.icon({
        iconUrl: marker.src,
        shadowUrl: markerShadow.src,
      });

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        })
        .addTo(map);

      leaflet.marker([47.8516, 8.029705], { icon }).addTo(map);
    }

    init();
  }, []);

  return <div ref={ref} {...props} />;
}
