"use client";

import Icon from "@/components/icon";
import Logo from "@/components/logo";
import usePageMenu from "@/hooks/use-page-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const { open, toggle, scrolled, ref } = usePageMenu();

  return (
    <>
      <div className="bg-secondary-900 text-white">
        <ul className="mx-auto flex h-12 max-w-7xl items-center justify-end gap-8 px-4">
          <li>
            <a
              href="tel:+491739940283"
              className="inline-flex items-center gap-2 py-2 text-xs font-medium uppercase transition-colors ease-in-out hover:text-primary-200 sm:text-sm md:px-0"
            >
              <Icon name="phone" className="size-4 shrink-0" />
              +49 (0)173 9940 283
            </a>
          </li>
          <li>
            <a
              href="mailto:info@zaehringer-huette.de"
              className="inline-flex items-center gap-2 py-2 text-xs font-medium uppercase transition-colors ease-in-out hover:text-primary-200 sm:text-sm md:px-0"
            >
              <Icon name="envelope" className="size-4 shrink-0" />
              Kontakt
            </a>
          </li>
        </ul>
      </div>

      <header
        className="sticky top-0 z-10 flex h-20 items-center bg-secondary-950 text-white"
        ref={ref}
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4">
          <Logo />

          <button
            type="button"
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-2 p-2 text-xs font-medium uppercase transition-colors hover:text-primary-200 md:hidden"
            aria-label={`${open ? "Schließe" : "Öffne"} Menü`}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={toggle}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
            Menu
          </button>

          <nav
            className={cn(
              "fixed bottom-1 right-1 top-0 flex flex-col items-start gap-x-8 gap-y-4 rounded-md border border-secondary-800 bg-secondary-950 px-16 py-8 transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex-row md:items-center md:border-none md:p-0",
              {
                "top-[calc(5rem+4px)] md:top-0": scrolled,
                "top-[calc(8rem+4px)] md:top-0": !scrolled,
                "invisible translate-x-full md:visible md:translate-x-0": !open,
              },
            )}
            id="navigation"
            aria-label="Seitennavigation"
          >
            <Link
              href="/#die-huette"
              className="py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200"
            >
              Die Hütte
            </Link>
            <Link
              href="/#die-umgebung"
              className="py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200"
            >
              Die Umgebung
            </Link>
            <Link
              href="/#galerie"
              className="py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200"
            >
              Galerie
            </Link>
            <Link
              href="/buchen#preise"
              className="py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200"
            >
              Preise
            </Link>
            <Link
              href="/buchen"
              className="flex h-10 items-center rounded-md border border-white px-8 text-xs font-medium uppercase transition-colors ease-in-out hover:border-primary-200 hover:text-primary-200 md:px-6 lg:h-12 lg:text-sm"
            >
              Buchen
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
