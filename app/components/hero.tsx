import Image from "next/image";
import Icon from "@/app/components/icon";
import HeroImage from "@/app/images/hero-image.jpg";

export default function Hero() {
  return (
    <section className="from-primary bg-gradient-to-b from-60% to-transparent to-60% pt-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="mb-4 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Urlaub im Schwarzwald
        </h1>
        <button
          type="button"
          className="mb-12 inline-flex h-10 items-center gap-2 rounded-full bg-stone-800 px-6 text-xs font-medium uppercase text-white md:h-12 md:gap-4 md:text-sm"
        >
          <Icon name="calendar" className="size-4 md:size-5" /> Jetzt buchen
        </button>

        <Image
          src={HeroImage}
          width={1248}
          height={702}
          placeholder="blur"
          alt="eingeschneite holzhütte im schwarzwald zwischen bäumen und büschen"
          loading="eager"
          className="aspect-video rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
