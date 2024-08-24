import Image from "next/image";
import SkiLift from "@/app/images/skilift.jpg";
import Wohnzimmer from "@/app/images/wohnzimmer.jpg";
import HuetteFront from "@/app/images/huette-front-mit-schnee.jpg";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:pb-48 md:pt-32">
      <h2
        className="mx-auto mb-8 max-w-3xl scroll-m-36 text-center font-serif text-3xl md:text-4xl lg:text-5xl"
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
            src={SkiLift}
            width={500}
            height={600}
            placeholder="blur"
            alt="placeholder"
            className="aspect-[4/5] rounded-xl object-cover"
          />
          <figcaption className="mt-4">Skiparadies Schwarzwald</figcaption>
        </figure>
        <figure className="translate-y-16 md:translate-y-24">
          <Image
            src={Wohnzimmer}
            width={500}
            height={600}
            placeholder="blur"
            alt="placeholder"
            className="aspect-[4/5] rounded-xl object-cover"
          />
        </figure>
        <figure>
          <Image
            src={HuetteFront}
            width={500}
            height={600}
            placeholder="blur"
            alt="placeholder"
            className="aspect-[4/5] rounded-xl object-cover"
          />
          <figcaption className="mt-4">
            Die Hütte von außen mit Schnee
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
