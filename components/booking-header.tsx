import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/E91263A3-81A1-41C6-AD49-3B8EEBD465FF-scaled.jpeg?updatedAt=1708024266640",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/DDB33E3B-AED7-4B01-B92D-914E78AFB9E5-scaled.jpeg?updatedAt=1708024266617",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/4D0F85A5-FA8C-4C28-B1F2-8FA0F7C88095-scaled.jpeg?updatedAt=1708024266393",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/9B6142B9-A2E1-45D7-ACD6-BFE4B7392891-scaled.jpeg?updatedAt=1708024266367",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/waschbecken.jpg?updatedAt=1708024260513",
    alt: "",
    caption: "",
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
        Buchung wählen Sie Ihren gewünschten Zeitraum und füllen Sie das
        Formular aus. Wir melden uns dann bei Ihnen.
      </p>

      <figure className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={480}
            height={360}
            className={cn("aspect-[4/3] w-full rounded-xl object-cover", {
              "col-span-2 row-span-2 h-full": index === 0,
            })}
          />
        ))}
      </figure>
    </header>
  );
}
