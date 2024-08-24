"use client";

import type { ComponentPropsWithoutRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Icon from "@/app/components/icon";
import { cn } from "@/app/lib/utils";

type Props = ComponentPropsWithoutRef<"div">;

export default function Carousel({ children, className, ...props }: Props) {
  const [ref, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  return (
    <div className="overflow-hidden">
      <div ref={ref}>
        <div
          className={cn("flex touch-pan-y gap-4 pl-8 md:gap-8", className)}
          {...props}
        >
          {children}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-x-8">
        <button
          type="button"
          aria-label="Vorheriges Bild anzeigen"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <Icon name="left" className="size-10" />
        </button>
        <button
          type="button"
          aria-label="Nächstes Bild anzeigen"
          onClick={() => emblaApi?.scrollNext()}
        >
          <Icon name="right" className="size-10" />
        </button>
      </div>
    </div>
  );
}
