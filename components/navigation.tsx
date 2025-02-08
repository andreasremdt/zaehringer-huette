"use client";

import Icon from "@/components/icon";
import useNavigation from "@/hooks/use-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navigation() {
  const { visible, open, close, ref } = useNavigation();

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-2 p-2 text-sm font-medium uppercase transition-colors hover:text-primary-200 md:hidden"
        aria-label="Öffne Menü"
        aria-expanded={visible}
        aria-controls="navigation"
        onClick={open}
      >
        <Icon name="menu" className="size-5" />
        Menü
      </button>

      <nav
        ref={ref}
        id="navigation"
        data-visible={visible || undefined}
        className={cn(
          "fixed md:static inset-2 rounded-lg z-10 flex-col gap-y-2 justify-center md:flex-row gap-x-8 bg-secondary-900 md:bg-transparent items-center",
          {
            "visible flex animate-fade-in": visible,
            "hidden md:flex": !visible,
          },
        )}
        aria-label="Seitennavigation"
      >
        <button
          type="button"
          aria-label="Menü schließen"
          className="absolute top-6 right-6 md:hidden"
          onClick={close}
        >
          <Icon name="close" className="size-8" />
        </button>

        <h2 className="text-3xl font-serif mb-4 md:hidden">Menü</h2>

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
          href="/reservieren#preise"
          className="py-2 text-sm font-medium uppercase transition-colors ease-in-out hover:text-primary-200"
        >
          Preise
        </Link>
        <Link
          href="/reservieren"
          className="flex h-12 md:h-10 items-center rounded-md border border-white px-8 text-sm md:text-xs font-medium uppercase transition-colors ease-in-out hover:border-primary-200 hover:text-primary-200 md:px-6 lg:h-12 lg:text-sm"
        >
          Reservieren
        </Link>
      </nav>
    </>
  );
}
