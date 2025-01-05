import Image from "@/components/image";
import { cn } from "@/lib/utils";
import type { ImageHeroBlock } from "@/payload-types";
import { Fragment } from "react";

type Props = ImageHeroBlock;

export default function ImageHero({ title, description, images }: Props) {
  return (
    <header className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <h1 className="mb-4 font-serif text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mb-16 max-w-3xl md:mb-24">{description}</p>

      <figure className="grid grid-cols-4 gap-2 md:gap-4">
        {images.map((image, index) => (
          <Fragment key={typeof image === "string" ? index : image.id}>
            {typeof image !== "string" ? (
              <Image
                src={image.url}
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
            ) : null}
          </Fragment>
        ))}
      </figure>
    </header>
  );
}
