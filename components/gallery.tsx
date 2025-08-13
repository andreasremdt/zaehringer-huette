import { Fragment } from "react";
import Carousel from "@/components/carousel";
import Icon from "@/components/icon";
import Image from "@/components/image";
import Lightbox from "@/components/lightbox";
import type { GalleryBlock } from "@/payload-types";

type Props = GalleryBlock;

export default function Gallery({ description, title, images }: Props) {
  return (
    <section className="bg-secondary-950 py-16 text-white md:py-32">
      <h2
        className="mb-2 scroll-m-24 text-center font-serif text-3xl md:text-4xl lg:text-5xl"
        id="galerie"
      >
        {title}
      </h2>
      {description ? (
        <p className="mb-8 text-center text-white">{description}</p>
      ) : null}

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
            <Fragment key={typeof image === "string" ? index : image.id}>
              {typeof image !== "string" ? (
                <figure className="min-w-0 flex-shrink-0 flex-grow-0 basis-1/2 overflow-hidden rounded-xl md:basis-1/4 lg:basis-1/6">
                  <a
                    href={image.url as string}
                    data-fancybox="gallery"
                    className="group relative block"
                    aria-label={`Zeige Bild ${index + 1} in Großansicht`}
                  >
                    <Image
                      src={image.url}
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
              ) : null}
            </Fragment>
          ))}
        </Carousel>
      </Lightbox>
    </section>
  );
}
