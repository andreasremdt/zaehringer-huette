import Image from "next/image";
import Carousel from "@/app/components/carousel";
import Lightbox from "@/app/components/lightbox";

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
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/84AC53B9-3F56-4146-8D7F-DCB6B7427F23-scaled.jpeg?updatedAt=1708024266333",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/28B80F85-59B3-406E-A3B7-E576DFBCB32C-scaled.jpeg?updatedAt=1708024266172",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/21A296BC-5B9C-4D59-B0BA-16C33283A5F5-scaled.jpeg?updatedAt=1708024265492",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/EA5197BD-0ACE-41DA-8673-E2E6C4F2DAAD-scaled.jpeg?updatedAt=1708024265243",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/IMG_5283.jpg?updatedAt=1708024262643",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/silberwiesen-zimmer.jpg?updatedAt=1708024262030",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/huette-front-fruehling.jpg?updatedAt=1708024261463",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/esstisch.jpg?updatedAt=1708024261430",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/skilift-feldberg.jpg?updatedAt=1708024261359",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/huette-front-mit-schnee.jpg?updatedAt=1708024261293",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/kleines-schlafzimmer.jpg?updatedAt=1708024261213",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/kueche.jpg?updatedAt=1708024261132",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/ofen.jpg?updatedAt=1708024261059",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/IMG_5311.jpg?updatedAt=1708024260945",
    alt: "",
    caption: "",
  },
  {
    src: "https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/waschbecken.jpg?updatedAt=1708024260513",
    alt: "",
    caption: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-secondary py-16 text-white md:py-32">
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
            },
            prev: {
              "aria-label": "Vorheriges Bild anzeigen",
            },
          }}
        >
          {images.map((image) => (
            <figure
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/4 lg:basis-1/6"
              key={image.src}
            >
              <a
                href={image.src}
                data-fancybox="gallery"
                data-caption={image.caption}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={480}
                  height={360}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </a>
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </Carousel>
      </Lightbox>
    </section>
  );
}
