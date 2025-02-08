import Icon from "@/components/icon";
import Image from "@/components/image";
import type { HeroBlock } from "@/payload-types";
import Link from "next/link";

type Props = HeroBlock;

export default function Hero({ title, pretitle, image }: Props) {
  return (
    <section className="bg-secondary-950 py-16 text-white lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 lg:flex-row">
        <div className="text-center lg:basis-2/5 lg:text-left">
          <p className="mb-2">{pretitle}</p>
          <h1 className="mb-8 font-serif text-5xl lg:text-7xl">{title}</h1>

          <Link
            href="/reservieren"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary-200 px-6 text-xs font-medium uppercase text-secondary-950 transition-colors duration-300 ease-in-out hover:bg-white lg:h-12 lg:gap-4 lg:text-sm"
          >
            <Icon name="calendar" className="size-4 lg:size-5" /> Jetzt
            reservieren
          </Link>
        </div>

        {typeof image !== "string" ? (
          <Image
            src={image.url}
            width={1248}
            height={702}
            alt={image.alt}
            loading="eager"
            fetchPriority="high"
            priority
            quality={75}
            decoding="async"
            className="w-full rounded-2xl object-cover object-top lg:basis-3/5"
          />
        ) : null}
      </div>
    </section>
  );
}
