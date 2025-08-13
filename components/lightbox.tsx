"use client";

import { Fancybox, type FancyboxOptions } from "@fancyapps/ui";
import { type ComponentPropsWithoutRef, useEffect, useRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  options?: Partial<FancyboxOptions>;
};

export default function Lightbox({ options = {}, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;

    Fancybox.bind(container, "[data-fancybox]", options);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  });

  return <div ref={ref} {...props} />;
}
