import HeaderClient from "@/components/header.client";
import Icon from "@/components/icon";
import Logo from "@/components/logo";
import { getGlobalConfig } from "@/lib/fetcher";

export default async function Header() {
  const result = await getGlobalConfig();

  return (
    <>
      <div className="bg-secondary-900 text-white">
        <ul className="mx-auto flex h-12 max-w-7xl items-center justify-end gap-8 px-4">
          <li>
            <a
              href={`tel:${result.phone}`}
              className="inline-flex items-center gap-2 py-2 text-xs font-medium uppercase transition-colors ease-in-out hover:text-primary-200 sm:text-sm md:px-0"
            >
              <Icon name="phone" className="size-4 shrink-0" />
              {result.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${result.email}`}
              className="inline-flex items-center gap-2 py-2 text-xs font-medium uppercase transition-colors ease-in-out hover:text-primary-200 sm:text-sm md:px-0"
            >
              <Icon name="envelope" className="size-4 shrink-0" />
              Kontakt
            </a>
          </li>
        </ul>
      </div>

      <header className="sticky top-0 z-10 flex h-20 items-center bg-secondary-950 text-white">
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4">
          <Logo title={result.title} subtitle={result.subtitle} />

          <HeaderClient />
        </div>
      </header>
    </>
  );
}
