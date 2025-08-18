import { type ComponentPropsWithoutRef, forwardRef, type Ref } from "react";
import Icon from "@/components/icon";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<"select"> & {
  label: string;
  error?: string;
};

export default forwardRef(function Select(
  { className, label, required, error, children, id, value, ...props }: Props,
  ref: Ref<HTMLSelectElement>,
) {
  return (
    <div className={cn("relative", className)} aria-live="assertive">
      <select
        id={id}
        className="peer h-12 w-full appearance-none rounded-lg border border-stone-300 bg-white px-4 text-sm text-stone-600 transition-colors duration-300 ease-in-out hover:border-stone-400 focus:border-stone-600 focus:outline-hidden aria-[invalid]:border-red-300 aria-[invalid]:hover:border-red-500 aria-[invalid]:focus-visible:border-red-500 md:text-base"
        aria-describedby={`${id}-error`}
        aria-invalid={error ? true : undefined}
        {...props}
        ref={ref}
      >
        {children}
      </select>

      <Icon
        name="down"
        className="pointer-events-none absolute right-4 top-4 size-5"
      />

      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-2 top-6 -translate-y-10 bg-white px-2 transition-transform duration-300 ease-in-out peer-focus:-translate-y-10 md:top-6",
          {
            "-translate-y-1/2": !value,
          },
        )}
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
