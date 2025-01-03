"use client";

import { Fancybox } from "@fancyapps/ui";
import type { OptionsType } from "@fancyapps/ui/types/Fancybox/options";
import { type ComponentPropsWithoutRef, useEffect, useRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  options?: Partial<OptionsType>;
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
