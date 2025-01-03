import Carousel from "@/components/carousel";
import Icon from "@/components/icon";
import Lightbox from "@/components/lightbox";
import Image from "next/image";

const images = [
  {
    src: "/images/küche.jpg",
    alt: "Beleuchtete Frontansicht der Küche mit Esstisch und Schrank",
  },
  {
    src: "/images/kamin-küche.jpg",
    alt: "Inaktiver Kamin mit Holzstapel und einem Seitenschrank in Küche",
  },
  {
    src: "/images/waschbecken.jpg",
    alt: "Weißes Porzellanwaschbecken mit einem WC links",
  },
  {
    src: "/images/dusche.jpg",
    alt: "Moderne Dusche mit Glastrennung und Fliesenfußboden",
  },
  {
    src: "/images/dusche-innen.jpg",
    alt: "Innenansicht der modernen Dusche mit Blick auf Amaturen",
  },
  {
    src: "/images/essbereich.jpg",
    alt: "Massiver Holztisch mit einem Essbereich vor rustikalem Kamin mit 6 Stühlen",
  },
  {
    src: "/images/wohnzimmer-couch.jpg",
    alt: "Große, weiße Stoffcouch im Wohnzimmer mit warmer Beleuchtung",
  },
  {
    src: "/images/wohnzimmer-sessel.jpg",
    alt: "Roter Stoffsessel mit weißen Verzierungen im Wohnzimmer, dazu ein Hocker",
  },
  {
    src: "/images/flur.jpg",
    alt: "Flur mit alten Holzdielen und moderner Beleuchtung, mit Blick auf die Schlafzimmer",
  },
  {
    src: "/images/geweih.jpg",
    alt: "Hirschgeweih an Holzwand",
  },
  {
    src: "/images/bett-mit-tisch.jpg",
    alt: "Holztisch mit 3 Stühlen vor Bett",
  },
  {
    src: "/images/dreibettzimmer.jpg",
    alt: "Holztisch mit 3 Stühlen vor Bett",
  },
  {
    src: "/images/schlafsofa.jpg",
    alt: "Graues Schlafsofa in kleinem Zimmer mit warmer Beleuchtung",
  },
  {
    src: "/images/doppelbett.jpg",
    alt: "Großes Doppelbett mit weißem Bezug in Schlafzimmer mit Holz",
  },
  {
    src: "/images/doppelbett-bunt.jpg",
    alt: "Großes Doppelbett mit grauem Bezug in Schlafzimmer mit Holz",
  },
  {
    src: "/images/doppelbett-mit-schrank.jpg",
    alt: "Mittleres Doppelbett mit weißem Bezug vor Holzschrank",
  },
  {
    src: "/images/doppelbett-weiß.jpg",
    alt: "Mittleres Doppelbett mit weißem Bezug und Nachtischen mit Beleuchtung",
  },
  {
    src: "/images/waschbecken-in-zimmer.jpg",
    alt: "Waschbecken im Schlafzimmer mit Fenster und Bett im Vordergrund",
  },
  {
    src: "/images/treppe.jpg",
    alt: "Schwarze Holztreppe mit Bilderwand",
  },
  {
    src: "/images/hütte-im-sommer-front.jpg",
    alt: "Frontansicht der Holzhütte im Sommer umgeben von Mischwald",
  },
  {
    src: "/images/hütte-sommer-eingang.jpg",
    alt: "Haupteingang der Holzhütte mit Steintreppe und Gartenmöbeln",
  },
  {
    src: "/images/hütte-sommer-hinten.jpg",
    alt: "Rückansicht der Holzhütte im Sommer mit Schuppen",
  },
  {
    src: "/images/gartenmöbel.jpg",
    alt: "Gartenmöbel aus Holz vor der Hütte",
  },
  {
    src: "/images/hütte-mit-schnee-front.jpg",
    alt: "Frontansicht der Holzhütte im Winter mit viel Schnee umgeben von Mischwald",
  },
  {
    src: "/images/hütte-außen-mit-schnee.jpg",
    alt: "Rückansicht der Holzhütte im Winter mit viel Schnee im Dunkeln",
  },
  {
    src: "/images/hütte-schnee.jpg",
    alt: "Gezoomte Frontansicht der Holzhütte mit viel Schnee im Dunkeln",
  },
  {
    src: "/images/skilift-mit-schnee.jpg",
    alt: "Skilift im Winter mit viel Schnee vor blauem Himmel und einigen Skifahrern",
  },
  {
    src: "/images/feldberg-schnee.jpg",
    alt: "Blick auf einen Turm auf dem Feldberg im Winter mit blauem Himmel",
  },
];

export default function Gallery() {
  return (
    <section className="bg-secondary-950 py-16 text-white md:py-32">
      <h2
        className="mb-2 scroll-m-24 text-center font-serif text-3xl md:text-4xl lg:text-5xl"
        id="galerie"
      >
        Galerie
      </h2>
      <p className="mb-8 text-center text-white">
        Entdecken Sie unsere Hütte von innen und außen.
      </p>

      <Lightbox>
        <Carousel
          options={{
            next: {
              "aria-label": "Nächstes Bild anzeigen",
              className:
                "transition-all hover:translate-x-1 hover:text-primary-300 duration-300 ease-in-out",
            },
            prev: {
              "aria-label": "Vorheriges Bild anzeigen",
              className:
                "transition-all hover:-translate-x-1 hover:text-primary-300 duration-300 ease-in-out",
            },
          }}
        >
          {images.map((image, index) => (
            <figure
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-1/2 overflow-hidden rounded-xl md:basis-1/4 lg:basis-1/6"
              key={image.src}
            >
              <a
                href={image.src}
                data-fancybox="gallery"
                className="group relative block"
                aria-label={`Zeige Bild ${index + 1} in Großansicht`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={360}
                  loading="lazy"
                  quality={75}
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 group-focus-visible:opacity-50"
                />
                <span className="absolute inset-0 flex scale-90 items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <Icon name="maximize" className="size-8" />
                </span>
              </a>
            </figure>
          ))}
        </Carousel>
      </Lightbox>
    </section>
  );
}
