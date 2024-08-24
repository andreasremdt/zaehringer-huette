import Image from "next/image";
import SkiLift from "@/app/images/skilift.jpg";
import Hikers from "@/app/images/hikers.jpg";
import Landscape from "@/app/images/landscape.jpg";
import Fireplace from "@/app/images/fireplace-with-fire.jpg";

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
            src={Landscape}
            width={544}
            height={408}
            placeholder="blur"
            alt="lush forest with lakes and stones with mountains in the background during sunset"
            className="mb-4 aspect-video rounded-xl object-cover md:aspect-[4/3]"
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
            src={SkiLift}
            width={544}
            height={408}
            placeholder="blur"
            alt="ski lift in snowy mountains"
            className="mb-4 aspect-video rounded-xl object-cover md:aspect-[4/3]"
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
            src={Hikers}
            width={544}
            height={408}
            placeholder="blur"
            alt="two hikers climbing up a staircase within a lush forest"
            className="mb-4 aspect-video rounded-xl object-cover md:aspect-[4/3]"
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
            src={Fireplace}
            width={544}
            height={408}
            placeholder="blur"
            alt="fireplace with fire cracking"
            className="mb-4 aspect-video rounded-xl object-cover md:aspect-[4/3]"
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
