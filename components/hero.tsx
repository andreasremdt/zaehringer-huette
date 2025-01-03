import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-secondary-950 py-16 text-white lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-4 lg:flex-row">
        <div className="text-center lg:basis-2/5 lg:text-left">
          <p className="mb-2">Buchen Sie Ihren Urlaub im Schwarzwald</p>
          <h1 className="mb-8 font-serif text-5xl lg:text-7xl">
            Urlaub in der Zähringer Hütte
          </h1>

          <Link
            href="/buchen"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary-200 px-6 text-xs font-medium uppercase text-secondary-950 transition-colors duration-300 ease-in-out hover:bg-white lg:h-12 lg:gap-4 lg:text-sm"
          >
            <Icon name="calendar" className="size-4 lg:size-5" /> Jetzt buchen
          </Link>
        </div>

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
          className="w-full rounded-2xl object-cover object-top lg:basis-3/5"
        />
      </div>
    </section>
  );
}
