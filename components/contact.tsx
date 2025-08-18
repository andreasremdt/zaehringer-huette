import ContactForm from "@/components/contact-form";
import Icon from "@/components/icon";
import Map from "@/components/map";
import { getGlobalConfig } from "@/payload/fetcher";
import type { ContactFormBlock } from "@/payload-types";

type Props = ContactFormBlock;

export default async function Contact({ title, description }: Props) {
  const result = await getGlobalConfig();

  return (
    <section className="mt-16 grid grid-cols-1 bg-white lg:grid-cols-[auto_minmax(0%,640px)_minmax(0%,640px)_auto]">
      <div
        role="presentation"
        className="order-2 aspect-4/3 z-0 w-full lg:order-1 lg:col-span-2 lg:aspect-auto lg:h-full lg:pr-8"
      >
        <Map />
      </div>

      <div className="order-1 py-16 pl-4 pr-4 lg:pl-8">
        <h2 className="mb-4 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl">
          Kontakt & Anfahrt
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-16">
          <p>
            {result.street}
            <br />
            {result.zip} {result.city}
            <br />
            {result.country}
          </p>

          <ul>
            <li>
              <a
                href={`tel:${result.phone}`}
                className="inline-flex items-center gap-4"
              >
                <Icon name="phone" className="size-4 shrink-0" />
                {result.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${result.email}`}
                className="inline-flex items-center gap-4"
              >
                <Icon name="envelope" className="size-4 shrink-0" />
                {result.email}
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-8 border-stone-300" />

        <h3 className="mb-2 scroll-m-24 font-serif text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <p className="mb-8">{description}</p>

        <ContactForm />
      </div>
    </section>
  );
}
