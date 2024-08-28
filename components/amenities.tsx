import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/icon";

export default function Amenities() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mx-4 rounded-2xl border border-stone-300 bg-white px-4 py-16 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl lg:text-5xl">
          Ausstattung
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article>
            <h3 className="mb-4 font-serif text-2xl md:mb-8 md:text-3xl lg:text-4xl">
              Allgemeines
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src="/images/wifi.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                WLAN mit 50 mbit/s
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/kitchen.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                Moderne Küche mit Vollausstattung
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/people.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                Platz für bis zu 11 Personen
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/fireplace.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                2 Kachelöfen in Wohn- und Esszimmer
              </li>
            </ul>
          </article>
          <article>
            <h3 className="mb-4 font-serif text-2xl md:mb-8 md:text-3xl lg:text-4xl">
              Übernachtung
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src="/images/bed.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                2 Doppelzimmer
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/double-bedroom.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                1 Zweibettzimmer
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/bunk-bed.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                1 Dreibettzimmer
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/couch.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                1 Zimmer mit Schlafcouch
              </li>
            </ul>
          </article>
          <article>
            <h3 className="mb-4 font-serif text-2xl md:mb-8 md:text-3xl lg:text-4xl">
              Sanitäre Anlagen
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Image
                  src="/images/shower.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                Behindertengerechte Duschen und WCs
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/sink.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                Separate Waschbecken pro Zimmer
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/toilet.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                2 Toiletten
              </li>
              <li className="flex items-center gap-4">
                <Image
                  src="/images/warm-water.svg"
                  width={32}
                  height={32}
                  alt=""
                  loading="eager"
                  decoding="async"
                  className="size-8"
                  aria-hidden="true"
                />
                Warmwasser überall im Haus
              </li>
            </ul>
          </article>
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
