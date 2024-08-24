import Input from "@/app/components/input";
import Textarea from "@/app/components/textarea";
import Icon from "@/app/components/icon";

export default function Contact() {
  return (
    <section className="mt-16 grid grid-cols-1 bg-white lg:grid-cols-[auto,minmax(0%,640px),minmax(0%,640px),auto]">
      <iframe
        className="order-2 aspect-[4/3] w-full lg:order-1 lg:col-span-2 lg:aspect-auto lg:h-full lg:pr-8"
        width="425"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=8.026188611984255%2C47.84774478678298%2C8.033269643783571%2C47.85478965945601&layer=mapnik&marker=47.85126914266297%2C8.029729127883911"
      />

      <div className="order-1 py-16 pl-4 pr-4 lg:pl-8">
        <h2 className="mb-4 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl">
          Kontakt & Anfahrt
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-16">
          <p>
            Dr. Freddy Stober Weg 8<br />
            79868 Feldberg (Schwarzwald)
            <br />
            Deutschland
          </p>

          <ul>
            <li>
              <a
                href="tel:+491739940283"
                className="inline-flex items-center gap-4"
              >
                <Icon name="phone" className="size-4 shrink-0" />
                +49 (0)173 9940 283
              </a>
            </li>
            <li>
              <a
                href="mailto:info@zaehringer-huette.de"
                className="inline-flex items-center gap-4"
              >
                <Icon name="envelope" className="size-4 shrink-0" />
                info@zaehringer-huette.de
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-8" />

        <h3 className="mb-2 scroll-m-24 font-serif text-2xl md:text-3xl lg:text-4xl">
          Haben Sie Fragen?
        </h3>
        <p className="mb-8">
          Gerne beantworten wir Ihre Fragen und geben Auskunft über die Hütte,
          Umgebung und weiteres. Füllen Sie einfach das Formular aus.
        </p>

        <form className="space-y-4 md:space-y-8">
          <Input
            type="text"
            id="name"
            name="name"
            label="Ihr Vor- und Nachname"
            required
          />
          <div className="flex gap-4 md:gap-8">
            <Input
              type="email"
              id="email"
              name="email"
              label="Ihre E-Mail-Adresse"
              required
              className="flex-1"
            />
            <Input
              type="text"
              id="phone"
              name="phone"
              label="Ihre Telefonnummer"
              className="flex-1"
            />
          </div>
          <Textarea
            id="message"
            name="message"
            label="Ihre Nachicht"
            required
          />
          <button
            type="submit"
            className="bg-primary flex h-10 w-full items-center justify-center gap-2 rounded-lg px-6 text-xs font-medium uppercase md:h-12 md:gap-4 md:text-sm"
          >
            <Icon name="send" className="size-5" />
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
