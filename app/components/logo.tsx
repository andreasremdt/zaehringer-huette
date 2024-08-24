import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/app//lib/utils";

type Props = ComponentPropsWithoutRef<"a">;

export default function Logo({ className, ...props }: Props) {
  return (
    <Link
      href="/"
      {...props}
      className={cn("block text-center uppercase leading-none", className)}
      aria-label="Navigiere zur Startseite"
    >
      <span
        className="block font-serif text-2xl font-semibold"
        aria-hidden="true"
      >
        Zähringer Hütte
      </span>
      <span className="text-xs tracking-wider" aria-hidden="true">
        Urlaub im Schwarzwald
      </span>
    </Link>
  );
}
