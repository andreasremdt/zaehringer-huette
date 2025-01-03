import { cn } from "@/lib/utils";
import Image from "next/image";

const images = [
  {
    src: "/images/doppelbett-bunt.jpg",
    alt: "Großes Doppelbett mit grauem Bezug in Schlafzimmer mit Holz",
  },
  {
    src: "/images/hütte-schnee.jpg",
    alt: "Gezoomte Frontansicht der Holzhütte mit viel Schnee im Dunkeln",
  },
  {
    src: "/images/doppelbett-weiß.jpg",
    alt: "Mittleres Doppelbett mit weißem Bezug und Nachtischen mit Beleuchtung",
  },
  {
    src: "/images/geweih.jpg",
    alt: "Hirschgeweih an Holzwand",
  },
  {
    src: "/images/waschbecken.jpg",
    alt: "Weißes Porzellanwaschbecken mit einem WC links",
  },
];

export default function BookingHeader() {
  return (
    <header className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h1 className="mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
        Buchen Sie Ihren Aufenthalt
      </h1>
      <p className="mb-16 max-w-3xl md:mb-24">
        Wir freuen uns über Ihr Interesse an der Hütte. Für eine verbindliche
        Buchung lesen Sie bitte die Hinweise und Regeln und füllen dann das
        Formular aus.
      </p>

      <figure className="grid grid-cols-4 gap-2 md:gap-4">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={480}
            height={360}
            loading="eager"
            decoding="async"
            quality={75}
            className={cn("aspect-[4/3] w-full rounded-xl object-cover", {
              "col-span-2 row-span-2 h-full": index === 0,
            })}
          />
        ))}
      </figure>
    </header>
  );
}
