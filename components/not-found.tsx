import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 text-center md:pb-48 md:pt-32">
      <p className="mb-8 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-9xl">
        404
      </p>
      <h1 className="mb-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Diese Seite existiert nicht
      </h1>
      <p className="mb-4">
        Es tut uns Leid, aber die von Ihnen gewünschte Seite existiert nicht.
      </p>

      <Link
        href="/"
        className="inline-flex h-10 items-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white md:h-12 md:gap-4 md:text-sm"
      >
        Zur Startseite
      </Link>
    </div>
  );
}
