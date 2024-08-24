import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/app/lib/utils";

type Props = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
};

export default function Textarea({
  className,
  label,
  required,
  id,
  ...props
}: Props) {
  return (
    <div className={cn("relative", className)}>
      <textarea
        id={id}
        className="peer min-h-32 w-full rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm text-stone-600 transition-colors hover:border-stone-400 focus:border-stone-600 focus:outline-none md:text-base"
        placeholder=" "
        required={required}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-2 top-5 -translate-y-8 cursor-text bg-white px-2 transition-transform peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-8 md:top-6 md:-translate-y-10 md:peer-focus:-translate-y-10"
      >
        {label}
        {required ? (
          <>
            <span className="sr-only">Pflichtfeld</span>
            <span aria-hidden="true">*</span>
          </>
        ) : null}
      </label>
    </div>
  );
}
