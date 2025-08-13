import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"a"> & {
  title: string;
  subtitle: string;
};

export default function Logo({ className, title, subtitle, ...props }: Props) {
  return (
    <Link
      href="/"
      {...props}
      className={cn("block uppercase leading-none", className)}
      aria-label="Navigiere zur Startseite"
    >
      <span
        className="block whitespace-nowrap font-serif text-xl font-semibold sm:text-2xl"
        aria-hidden="true"
      >
        {title}
      </span>
      <span className="text-xs tracking-wider" aria-hidden="true">
        {subtitle}
      </span>
    </Link>
  );
}
