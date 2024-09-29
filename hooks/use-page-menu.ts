import { useEffect, useRef, useState } from "react";

export default function usePageMenu() {
  const ref = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    function handleScroll() {
      if (window.scrollY > 0 && !scrolled) {
        setScrolled(true);
      }

      if (window.scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (!ref.current?.contains(target)) {
        setOpen(false);
      } else if (target.hasAttribute("href")) {
        setOpen(false);
      }
    }

    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;

      document.addEventListener("keydown", handleKeyDown);
    }

    document.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClick);

    setScrolled(window.scrollY > 0);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [open, scrolled]);

  return { open, toggle, scrolled, ref };
}
