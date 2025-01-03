import { cn } from "@/lib/utils";
import type { AboutBlock } from "@/payload-types";
import Image from "next/image";

type Props = AboutBlock;

export default function About({ text, title, images }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:pb-48 md:pt-32">
      <h2
        className="mx-auto mb-8 max-w-3xl scroll-m-24 text-center font-serif text-3xl md:text-4xl lg:text-5xl"
        id="die-huette"
      >
        {title}
      </h2>
      <p className="mx-auto max-w-xl text-center">{text}</p>

      <div className="mt-16 grid grid-cols-3 gap-4 md:mt-32 md:gap-8 lg:gap-12">
        {images.map((image, index) => (
          <>
            {typeof image !== "string" ? (
              <figure
                key={image.url}
                className={cn({
                  "translate-y-16 md:translate-y-24": index === 1,
                })}
              >
                <Image
                  src={image.url as string}
                  width={500}
                  height={600}
                  alt={image.alt}
                  className="aspect-[4/5] rounded-xl object-cover"
                  loading="lazy"
                  quality={75}
                  decoding="async"
                />
                {image.caption ? (
                  <figcaption className="mt-2 text-sm">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
          </>
        ))}
      </div>
    </section>
  );
}
