"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import Icon from "@/components/icon";
import { cn } from "@/lib/utils";
import usePageMenu from "@/hooks/use-page-menu";

export default function Header() {
  const { open, toggle, scrolled, ref } = usePageMenu();

  return (
    <>
      <div className="bg-secondary-900 py-2 text-white">
        <ul className="mx-auto flex max-w-7xl justify-end gap-8 px-4">
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
        className="sticky top-0 z-10 bg-secondary-950 text-white"
        ref={ref}
      >
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 transition-all">
          <Logo className="py-4" />

          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 md:hidden"
            aria-label={`${open ? "Schließe" : "Öffne"} Menü`}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={toggle}
          >
            <Icon name={open ? "close" : "menu"} className="size-7" />
          </button>

          <nav
            className={cn(
              "fixed bottom-0 right-0 flex flex-col bg-secondary-950 px-4 py-4 transition-all ease-in-out md:visible md:static md:top-0 md:w-full md:translate-x-0 md:flex-row md:items-center md:justify-center md:gap-12 md:border-none md:bg-transparent md:px-0",
              {
                "invisible translate-x-full": !open,
                "top-16": scrolled,
                "top-28": !scrolled,
              },
            )}
            id="navigation"
            aria-label="Seitennavigation"
          >
            <Link
              href="/#die-huette"
              className="px-8 py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200 md:px-0"
            >
              Die Hütte
            </Link>
            <Link
              href="/#die-umgebung"
              className="px-8 py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200 md:px-0"
            >
              Die Umgebung
            </Link>
            <Link
              href="/#galerie"
              className="px-8 py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200 md:px-0"
            >
              Galerie
            </Link>
            <Link
              href="/buchen#preise"
              className="px-8 py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200 md:px-0"
            >
              Preise
            </Link>
            <Link
              href="/buchen"
              className="px-8 py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200 md:px-0"
            >
              Buchen
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
