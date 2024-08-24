import Icon from "@/app/components/icon";

export default function BookNow() {
  return (
    <section className="mx-auto max-w-7xl px-4 text-center">
      <div className="rounded-2xl bg-[url(https://ik.imagekit.io/6uqkzvybwk/zaehringer-huette/yannick-pulver-ZwPuquZBnyM-unsplash.jpg?updatedAt=1708014036346)] bg-cover px-4 py-16 md:py-32">
        <h2
          className="mb-2 scroll-m-24 font-serif text-3xl text-white md:text-4xl lg:text-5xl"
          id="buchen"
        >
          Buchen
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-white">
          Unsere Hütte ist ganzjährig sehr beliebt und oftmals ausgebucht.
          Buchen Sie Ihren Aufenthalt am besten jetzt bequem über unsere
          Webseite.
        </p>

        <button
          type="button"
          className="bg-primary mx-auto flex h-10 items-center gap-2 rounded-lg px-6 text-xs font-medium uppercase md:h-12 md:gap-4 md:text-sm"
        >
          <Icon name="calendar" className="size-4 md:size-5" /> Jetzt buchen
        </button>
      </div>
    </section>
  );
}
