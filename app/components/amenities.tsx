import Image from "next/image";
import Wifi from "@/app/images/wifi.svg";
import Kitchen from "@/app/images/kitchen.svg";
import People from "@/app/images/people.svg";
import Fireplace from "@/app/images/fireplace.svg";
import Icon from "./icon";

export default function Amenities() {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="mx-4 rounded-2xl bg-white px-4 py-16 md:px-16 md:py-32">
        <h2 className="mb-16 text-center font-serif text-3xl md:text-4xl lg:text-5xl">
          Ausstattung
        </h2>

        <ul className="grid grid-cols-2 gap-8 text-center font-serif text-lg font-medium md:grid-cols-4 md:gap-16 md:text-xl">
          <li>
            <Image
              src={Wifi}
              width={64}
              height={64}
              alt=""
              className="mx-auto mb-4 size-12 md:size-16"
              aria-hidden="true"
            />
            WLAN mit 50 mbit/s
          </li>
          <li>
            <Image
              src={Kitchen}
              width={64}
              height={64}
              alt=""
              className="mx-auto mb-4 size-12 md:size-16"
              aria-hidden="true"
            />
            Moderne Küche mit Vollausstattung
          </li>
          <li>
            <Image
              src={People}
              width={64}
              height={64}
              alt=""
              className="mx-auto mb-4 size-12 md:size-16"
              aria-hidden="true"
            />
            Platz für bis zu 11 Personen
          </li>
          <li>
            <Image
              src={Fireplace}
              width={64}
              height={64}
              alt=""
              className="mx-auto mb-4 size-12 md:size-16"
              aria-hidden="true"
            />
            2 Kachelöfen in Wohn- und Esszimmer
          </li>
        </ul>

        <ul className="mt-16 flex flex-col justify-center gap-8 text-center font-serif text-lg font-medium md:flex-row md:text-xl">
          <li className="md:w-2/4 lg:w-1/3">
            <strong className="mb-2 block text-xl md:text-2xl">
              Übernachtung
            </strong>
            <ul>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> Platz für 4 - 11
                Personen
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> 2 Doppelzimmer
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> 1 Zweibettzimmer
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> 1 Dreibettzimmer
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> 1 Zimmer mit
                Schlafcouch
              </li>
            </ul>
          </li>
          <li className="md:w-2/4 lg:w-1/3">
            <strong className="mb-2 block text-xl md:text-2xl">
              Sanitäre Anlagen
            </strong>
            <ul>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" />
                Dusche und WC sind neu renoviert
                <br />
                (behindertengerecht) ebenerdig
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> Separate
                Waschbecken pro Zimmer
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> 2 Toiletten
              </li>
              <li className="flex justify-center gap-2">
                <Icon name="minus" className="mt-2 size-3" /> Warmwasser überall
                im Haus
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}