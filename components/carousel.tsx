"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { ComponentPropsWithoutRef } from "react";
import Icon from "@/components/icon";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"div"> & {
  options?: {
    next?: ComponentPropsWithoutRef<"button">;
    prev?: ComponentPropsWithoutRef<"button">;
  };
};

export default function Carousel({
  children,
  className,
  options,
  ...props
}: Props) {
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
          {...options?.prev}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <Icon name="left" className="size-10" />
        </button>
        <button
          type="button"
          {...options?.next}
          onClick={() => emblaApi?.scrollNext()}
        >
          <Icon name="right" className="size-10" />
        </button>
      </div>
    </div>
  );
}
