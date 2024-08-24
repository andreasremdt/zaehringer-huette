import { useEffect, useRef, useState } from "react";

export default function usePageMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((previous) => !previous);
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);

        lastFocused.current?.focus();
      }

      const focusable = ref.current?.querySelectorAll<HTMLElement>(
        'a:not([tabindex="-1"]), button',
      );

      if (event.key === "Tab" && focusable && focusable.length > 0) {
        if (event.shiftKey) {
          if (document.activeElement === focusable[0]) {
            event.preventDefault();

            focusable[focusable.length - 1].focus();
          }
        } else if (document.activeElement === focusable[focusable.length - 1]) {
          event.preventDefault();

          focusable[0].focus();
        }
      }
    }

    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
    }
  }, [open]);

  return { open, toggle, ref };
}
