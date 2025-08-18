"use client";

import { type ComponentProps, useEffect, useRef } from "react";
import * as L from "leaflet";
import marker from "@/public/marker-icon.png";
import markerShadow from "@/public/marker-shadow.png";
import "leaflet/dist/leaflet.css";

type Props = ComponentProps<"div">;

export default function LeafletMap(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const map = L
      .map(ref.current, {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        touchZoom: true,
      })
      .setView([47.851272, 8.029753], 17);

    const icon = L.icon({
      iconUrl: marker.src,
      shadowUrl: markerShadow.src,
    });

    L
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      })
      .addTo(map);

    L.marker([47.8516, 8.029705], { icon }).addTo(map);

    return () => {
      map.off();
      map.remove();
    }
  }, []);

  return <div ref={ref} className="h-full" {...props} />;
}
