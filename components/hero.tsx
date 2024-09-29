import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-200 from-60% to-transparent to-60% pt-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="mb-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Urlaub im Schwarzwald
        </h1>

        <Link
          href="/buchen"
          className="mb-12 inline-flex h-10 items-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-primary-50 hover:text-secondary-950 md:h-12 md:gap-4 md:text-sm"
        >
          <Icon name="calendar" className="size-4 md:size-5" /> Jetzt buchen
        </Link>

        <Image
          src="/images/hütte-im-sommer-front.jpg"
          blurDataURL="/images/hütte-im-sommer-front-blur.jpg"
          width={1248}
          height={702}
          alt="Frontansicht der Holzhütte im Sommer zwischen Bäumen und Büschen"
          loading="eager"
          fetchPriority="high"
          quality={75}
          decoding="async"
          className="aspect-video rounded-2xl object-cover object-top"
        />
      </div>
    </section>
  );
}
