import Icon from "@/components/icon";
import type { BookNowBlock } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

type Props = BookNowBlock;

export default function BookNow({ title, text, image }: Props) {
  return (
    <div className="px-4">
      <section className="mx-auto max-w-7xl rounded-2xl px-4 py-16 md:py-32 text-center relative overflow-hidden bg-black/30">
        {typeof image !== "string" ? (
          <Image
            src={image.url as string}
            alt={image.alt}
            fill
            quality={75}
            className="object-cover -z-10"
          />
        ) : null}

        <h2
          className="mb-2 scroll-m-24 font-serif text-3xl text-white md:text-4xl lg:text-5xl"
          id="buchen"
        >
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-white">{text}</p>

        <Link
          href="/reservieren"
          className="mx-auto flex h-10 w-max items-center gap-2 rounded-lg bg-primary-200 px-6 text-xs font-medium uppercase transition-colors duration-300 ease-in-out hover:bg-white md:h-12 md:gap-4 md:text-sm"
        >
          <Icon name="calendar" className="size-4 md:size-5" /> Jetzt
          reservieren
        </Link>
      </section>
    </div>
  );
}
