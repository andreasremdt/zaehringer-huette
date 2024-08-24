"use client";

import Logo from "@/app/components/logo";
import Icon from "@/app/components/icon";
import { cn } from "@/app/lib/utils";
import usePageMenu from "@/app/hooks/use-page-menu";

export default function Header() {
  const { open, toggle, scrolled, ref } = usePageMenu();

  return (
    <header
      className="bg-primary sticky top-0 z-10 border-b border-stone-400"
      ref={ref}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-7xl items-center justify-center px-4 transition-all",
          {
            "h-28": !scrolled,
            "h-20": scrolled,
          },
        )}
      >
        <Logo
          tabIndex={-1}
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        />

        <button
          type="button"
          className="bg-primary absolute right-2 top-1/2 -translate-y-1/2 p-2 lg:hidden"
          aria-label={`${open ? "Schließe" : "Öffne"} Menü`}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={toggle}
        >
          <Icon name={open ? "close" : "menu"} className="size-7" />
        </button>

        <nav
          className={cn(
            "bg-primary fixed bottom-0 right-0 z-10 flex flex-col border-l border-t border-stone-400 px-4 py-8 transition-all duration-300 ease-in-out lg:visible lg:static lg:w-full lg:translate-x-0 lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:p-0",
            {
              "invisible translate-x-full": !open,
              "top-28": !scrolled,
              "top-20": scrolled,
            },
          )}
          id="navigation"
          aria-label="Seitennavigation"
        >
          <a
            href="#die-huette"
            className="px-8 py-2 text-sm font-medium uppercase lg:p-0"
          >
            Die Hütte
          </a>
          <a
            href="#galerie"
            className="px-8 py-2 text-sm font-medium uppercase lg:p-0"
          >
            Galerie
          </a>
          <a
            href="#"
            className="px-8 py-2 text-sm font-medium uppercase lg:p-0"
          >
            Preise
          </a>
          <a
            href="#"
            className="px-8 py-2 text-sm font-medium uppercase lg:mr-auto lg:p-0"
          >
            Buchen
          </a>
          <hr className="border-secondary my-4" />
          <a
            href="tel:+491739940283"
            className="inline-flex items-center gap-4 py-2 pr-8 text-sm font-medium uppercase lg:p-0"
          >
            <Icon name="phone" className="size-4 shrink-0" />
            +49 (0)173 9940 283
          </a>
          <a
            href="mailto:info@zaehringer-huette.de"
            className="inline-flex items-center gap-4 py-2 pr-8 text-sm font-medium uppercase lg:p-0"
          >
            <Icon name="envelope" className="size-4 shrink-0" />
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
