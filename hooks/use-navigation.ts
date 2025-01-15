import { useEffect, useRef, useState } from "react";

export default function useNavigation() {
  const [visible, setVisible] = useState(false);
  const lastFocused = useRef<HTMLElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();

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

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (ref.current?.contains(target) && target.hasAttribute("href")) {
        close();
      }
    }

    if (visible) {
      lastFocused.current = document.activeElement as HTMLElement;

      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClick);
    };
  }, [visible]);

  function close() {
    ref.current?.addEventListener(
      "animationend",
      () => {
        setVisible(false);
      },
      { once: true },
    );

    ref.current?.classList.remove("animate-fade-in");
    ref.current?.classList.add("animate-fade-out");
    document.body.classList.remove("overflow-hidden");
  }

  function open() {
    document.body.classList.add("overflow-hidden");

    setVisible(true);
  }

  return { visible, open, close, ref };
}
