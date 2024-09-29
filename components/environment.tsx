import Image from "next/image";

export default function Environment() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-32">
      <h2
        className="mb-8 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl"
        id="die-umgebung"
      >
        Die Umgebung
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <article>
          <Image
            src="/images/schwarzwald-fluß.jpg"
            width={544}
            height={408}
            alt="Kleiner See mit Bachlauf in herbstlich-bunter Landschaft"
            className="mb-4 aspect-video w-full rounded-xl object-cover md:aspect-[4/3]"
            loading="lazy"
            quality={75}
            decoding="async"
          />

          <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
            Idyllische Natur
          </h3>

          <p>
            Die Hütte liegt im Naturschutzgebiet des Schwarzwaldes. Sie erwartet
            eine tolle, bergige Landschaft mit sauberer Luft und eine ruhige
            Atmosphäre abseits der Straßen. Die Hütte ist ein Juwel und dient
            der kompletten Erholung.
          </p>
        </article>

        <article>
          <Image
            src="/images/skilift-mit-schnee.jpg"
            width={544}
            height={408}
            alt="Skilift von oben in verschneiter, bergiger Landschaft"
            className="mb-4 aspect-video w-full rounded-xl object-cover md:aspect-[4/3]"
            loading="lazy"
            quality={75}
            decoding="async"
          />

          <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
            Wintersport
          </h3>

          <p>
            Ski- und Snowboardfahrer finden 60 Pistenkilometer vor. Der Feldberg
            verfügt über 4 Sessellifte, eine Gondelbahn und 26 Schlepplifte,
            welche zum Wintersport einladen. Schneeschuhwandern bringt hier
            völlig neue Erlebnisse.
          </p>
        </article>

        <article>
          <Image
            src="/images/wanderer.jpg"
            width={544}
            height={408}
            alt="Zwei Wanderer klettern eine Holztreppe in einem Wald hinauf"
            className="mb-4 aspect-video w-full rounded-xl object-cover md:aspect-[4/3]"
            loading="lazy"
            quality={75}
            decoding="async"
          />

          <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
            Wanderwege
          </h3>

          <p>
            Wanderer und Abenteurer können im Sommer und Winter die insgesamt
            60km an (gespurten) Winterwanderwege entdecken. Alle Wege liegen in
            unmittelbarer Nähe zur Hütte.
          </p>
        </article>

        <article>
          <Image
            src="/images/wohnzimmer-mit-ofen-und-esstisch.jpg"
            width={544}
            height={408}
            alt="Wohnzimmer mit Ofen und Esstisch"
            className="mb-4 aspect-video w-full rounded-xl object-cover md:aspect-[4/3]"
            loading="lazy"
            quality={75}
            decoding="async"
          />

          <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
            Modern & Komfortabel
          </h3>

          <p>
            Dusche und WC wurden renoviert, jedes Zimmer verfügt über separate
            Waschbecken. Strom, Zentralheizung, Kachelofen, Pufferspeicher und
            WLAN sind vorhanden.
          </p>
        </article>
      </div>
    </section>
  );
}
