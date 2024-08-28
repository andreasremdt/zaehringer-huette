import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"input"> & {
  label: string;
  error?: string;
};

export default forwardRef(function Input(
  { className, label, required, error, id, ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <div className={cn("relative", className)} aria-live="assertive">
      <input
        id={id}
        className="peer h-12 w-full rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-600 transition-colors duration-300 ease-in-out hover:border-stone-400 focus:border-stone-600 focus:outline-none aria-[invalid]:border-red-300 aria-[invalid]:hover:border-red-500 aria-[invalid]:focus-visible:border-red-500 md:text-base"
        placeholder=" "
        aria-describedby={`${id}-error`}
        aria-invalid={error ? true : undefined}
        {...props}
        ref={ref}
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-2 top-6 -translate-y-10 bg-white px-2 transition-transform duration-300 ease-in-out peer-placeholder-shown:-translate-y-1/2 peer-focus:-translate-y-10 md:top-6"
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
