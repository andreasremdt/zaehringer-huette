import Image from "next/image";

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:pb-48 md:pt-32">
      <h2
        className="mx-auto mb-8 max-w-3xl scroll-m-24 text-center font-serif text-3xl md:text-4xl lg:text-5xl"
        id="die-huette"
      >
        Verbringen Sie einen unvergesslichen Urlaub in den Bergen
      </h2>
      <p className="mx-auto max-w-xl text-center">
        Eingebettet in den Bergen des Schwarzwaldes in unmittelbarer Nähe des
        Feldberges und seiner Skilifte befindet sich die rustikale, gut
        ausgestattete Zähringer Hütte. 1275m über dem Meeresspiegel gelegen
        weckt die Hütte im Winter und Sommer stets Alpengefühle. Die Hütte wurde
        2014 komplett neu renoviert und entspricht jeglichen Ansprüchen.
      </p>

      <div className="mt-16 grid grid-cols-3 gap-4 md:mt-32 md:gap-8 lg:gap-12">
        <figure>
          <Image
            src="/images/skilift-mit-schnee.jpg"
            width={500}
            height={600}
            alt="Skilift von oben in verschneiter, bergiger Landschaft"
            className="aspect-[4/5] rounded-xl object-cover"
            loading="lazy"
            quality={75}
            decoding="async"
          />
          <figcaption className="mt-2 text-sm">
            Skiparadies Schwarzwald
          </figcaption>
        </figure>
        <figure className="translate-y-16 md:translate-y-24">
          <Image
            src="/images/wohnzimmer-couch.jpg"
            width={500}
            height={600}
            alt="Gemütliche Eckcouch im Wohnzimmer mit viel Holz und warmem Licht"
            className="aspect-[4/5] rounded-xl object-cover"
            loading="lazy"
            quality={75}
            decoding="async"
          />
        </figure>
        <figure>
          <Image
            src="/images/hütte-front-mit-schnee.jpg"
            width={500}
            height={600}
            alt="Eingeschneite Holzhütte mit Wald im Hintergrund"
            className="aspect-[4/5] rounded-xl object-cover"
            loading="lazy"
            quality={75}
            decoding="async"
          />
          <figcaption className="mt-2 text-sm">
            Die Hütte von außen mit Schnee
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
