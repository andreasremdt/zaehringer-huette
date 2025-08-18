import Image from "@/components/image";
import type { EnvironmentBlock } from "@/payload-types";

type Props = EnvironmentBlock;

export default function Environment({ title, items }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center md:py-32">
      <h2
        className="mb-8 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl"
        id="die-umgebung"
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {items?.map((item) => (
          <article key={item.id}>
            {typeof item.image !== "string" ? (
              <Image
                src={item.image.url}
                width={544}
                height={408}
                alt={item.image.alt}
                className="mb-4 aspect-video w-full rounded-xl object-cover md:aspect-4/3"
                loading="lazy"
                quality={75}
                decoding="async"
              />
            ) : null}

            <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
              {item.title}
            </h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
