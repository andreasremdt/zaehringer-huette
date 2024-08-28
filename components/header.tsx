"use client";

import Link from "next/link";
import Logo from "@/components/logo";
import Icon from "@/components/icon";
import { cn } from "@/lib/utils";
import usePageMenu from "@/hooks/use-page-menu";

export default function Header() {
  const { open, toggle, scrolled, ref } = usePageMenu();

  return (
    <header
      className="sticky top-0 z-10 border-b border-stone-400 bg-primary-200"
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
          className="z-20 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        />

        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-200 p-2 lg:hidden"
          aria-label={`${open ? "Schließe" : "Öffne"} Menü`}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={toggle}
        >
          <Icon name={open ? "close" : "menu"} className="size-7" />
        </button>

        <nav
          className={cn(
            "fixed bottom-0 right-0 z-10 flex flex-col border-l border-t border-stone-400 bg-primary-200 px-4 py-8 transition-all duration-300 ease-in-out lg:visible lg:static lg:w-full lg:translate-x-0 lg:flex-row lg:items-center lg:gap-8 lg:border-none lg:bg-transparent lg:px-0",
            {
              "invisible translate-x-full": !open,
              "top-28": !scrolled,
              "top-20": scrolled,
            },
          )}
          id="navigation"
          aria-label="Seitennavigation"
        >
          <Link
            href="/#die-huette"
            className="group relative px-8 py-2 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:px-0"
          >
            Die Hütte
            <Icon
              name="down"
              className="pointer-events-none absolute left-1/2 hidden size-6 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </Link>
          <Link
            href="/#die-umgebung"
            className="group relative px-8 py-2 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:px-0"
          >
            Die Umgebung
            <Icon
              name="down"
              className="pointer-events-none absolute left-1/2 hidden size-6 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </Link>
          <Link
            href="/#galerie"
            className="group relative px-8 py-2 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:px-0"
          >
            Galerie
            <Icon
              name="down"
              className="pointer-events-none absolute left-1/2 hidden size-6 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </Link>
          <Link
            href="/buchen"
            className="group relative px-8 py-2 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:mr-auto lg:px-0"
          >
            Buchen
            <Icon
              name="right"
              className="pointer-events-none absolute left-1/2 hidden size-6 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </Link>
          <hr className="my-4 border-black" />
          <a
            href="tel:+491739940283"
            className="group relative inline-flex items-center gap-4 py-2 pr-8 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:px-0"
          >
            <Icon name="phone" className="size-4 shrink-0" />
            +49 (0)173 9940 283
            <Icon
              name="external"
              className="pointer-events-none absolute left-1/2 top-full hidden size-5 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </a>
          <a
            href="mailto:info@zaehringer-huette.de"
            className="group relative inline-flex items-center gap-4 py-2 pr-8 text-sm font-medium uppercase transition-transform duration-300 ease-in-out hover:-translate-y-1 lg:px-0"
          >
            <Icon name="envelope" className="size-4 shrink-0" />
            Kontakt
            <Icon
              name="external"
              className="pointer-events-none absolute left-1/2 top-full hidden size-5 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 lg:block"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
