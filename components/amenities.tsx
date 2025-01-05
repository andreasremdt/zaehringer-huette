import Icon from "@/components/icon";
import Image from "@/components/image";
import type { AmenitiesBlock } from "@/payload-types";
import Link from "next/link";

type Props = AmenitiesBlock;

export default function Amenities({ title, groups }: Props) {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mx-4 rounded-2xl border border-stone-300 bg-white px-4 py-16 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {groups?.map((group) => (
            <article key={group.id}>
              <h3 className="mb-4 font-serif text-2xl md:mb-8 md:text-3xl lg:text-4xl">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li className="flex items-center gap-4" key={item.id}>
                    {typeof item.icon !== "string" ? (
                      <Image
                        src={item.icon.url}
                        width={32}
                        height={32}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="size-8"
                        aria-hidden="true"
                      />
                    ) : null}
                    {item.name}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          href="/buchen"
          className="mx-auto mt-8 flex h-10 w-max items-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-secondary-950 md:h-12 md:gap-4 md:text-sm"
        >
          <Icon name="calendar" className="size-4 md:size-5" /> Jetzt buchen
        </Link>
      </div>
    </section>
  );
}
