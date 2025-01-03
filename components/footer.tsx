import Icon from "@/components/icon";
import Logo from "@/components/logo";
import config from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";

export default async function Footer() {
  const payload = await getPayload({ config });
  const result = await payload.findGlobal({
    slug: "contact-info",
  });

  return (
    <footer className="bg-secondary-950 text-white">
      <div className="border-b border-secondary-800 py-16 text-sm md:py-24 md:text-base">
        <div className="mx-auto max-w-7xl items-start px-4 lg:flex lg:justify-evenly">
          <div className="mb-8 lg:order-2 lg:mb-0">
            <Logo
              title={result.title}
              subtitle={result.subtitle}
              tabIndex={-1}
              className="text-center"
            />

            <p className="relative mt-4 pt-4 text-center before:absolute before:left-1/2 before:top-0 before:h-px before:w-1/4 before:-translate-x-1/2 before:bg-secondary-800 md:mt-8 md:pt-8">
              {result.street}
              <br />
              {result.zip} {result.city}
              <br />
              {result.country}
            </p>
          </div>

          <a
            href={`mailto:${result.email}`}
            className="group mb-8 flex flex-col items-center lg:order-1 lg:mb-0"
          >
            <span className="mb-2 grid size-12 place-items-center rounded-full border border-secondary-800 transition-colors duration-300 ease-in-out group-hover:bg-secondary-800 md:size-16">
              <Icon name="envelope" className="size-4 md:size-6" />
            </span>
            {result.email}
          </a>

          <a
            href={`tel:${result.phone}`}
            className="group flex flex-col items-center lg:order-3"
          >
            <span className="mb-2 grid size-12 place-items-center rounded-full border border-secondary-800 transition-colors duration-300 ease-in-out group-hover:bg-secondary-800 md:size-16">
              <Icon name="phone" className="size-4 md:size-6" />
            </span>
            {result.phone}
          </a>
        </div>
      </div>

      <div className="container mx-auto py-8 text-center text-xs md:text-sm">
        <p>
          &copy; {new Date().getFullYear()} Familie Effinger. Alle Rechte
          vorbehalten.
        </p>

        <nav className="mt-4 space-x-8">
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </nav>
      </div>
    </footer>
  );
}
