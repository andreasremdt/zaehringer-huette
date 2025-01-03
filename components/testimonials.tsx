import type { TestimonialBlock } from "@/payload-types";
import Carousel from "./carousel";

type Props = TestimonialBlock;

export default function Testimonials({ title, description, items }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center md:py-32">
      <h2 className="mb-2 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mb-8">Was sagen andere Mieter zu unserer Hütte?</p>
      ) : null}

      <div className="relative mx-auto max-w-5xl">
        <Carousel
          options={{
            next: {
              "aria-label": "Nächste Bewertung anzeigen",
              className:
                "from-primary-50 absolute right-0 top-0 flex h-full bg-gradient-to-l to-transparent pt-8 transition-all hover:translate-x-1 hover:text-primary-300 duration-300 ease-in-out",
            },
            prev: {
              "aria-label": "Vorherige Bewertung anzeigen",
              className:
                "from-primary-50 absolute left-0 top-0 flex h-full bg-gradient-to-r to-transparent pt-8 transition-all hover:-translate-x-1 hover:text-primary-300 duration-300 ease-in-out",
            },
          }}
        >
          {items?.map((item) => (
            <figure
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-full"
              key={item.id}
            >
              <blockquote className="mx-auto mb-4 max-w-2xl">
                <p className="px-12 font-serif text-lg font-medium before:content-['“'] after:content-['”'] md:px-0 md:text-xl lg:text-2xl">
                  {item.text}
                </p>
              </blockquote>
              <figcaption className="before:content-['-']">
                {item.author}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
