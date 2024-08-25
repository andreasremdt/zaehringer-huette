import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"textarea"> & {
  label: string;
  error?: string;
};

export default forwardRef(function Textarea(
  { className, label, required, error, id, ...props }: Props,
  ref: Ref<HTMLTextAreaElement>,
) {
  return (
    <div className={cn("relative", className)}>
      <textarea
        id={id}
        className="peer min-h-32 w-full rounded-lg border border-stone-300 bg-white px-4 py-2 align-middle text-sm text-stone-600 transition-colors hover:border-stone-400 focus:border-stone-600 focus:outline-none aria-[invalid]:border-red-300 md:text-base"
        placeholder=" "
        required={required}
        aria-describedby={`${id}-error`}
        aria-invalid={error ? true : undefined}
        {...props}
        ref={ref}
      />

      <label
        htmlFor={id}
        className="absolute left-2 top-6 -translate-y-10 cursor-text bg-white px-2 transition-transform peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-10 md:top-6"
      >
        {label}
        {required ? (
          <>
            <span className="sr-only">Pflichtfeld</span>
            <span aria-hidden="true">*</span>
          </>
        ) : null}
      </label>

      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
});