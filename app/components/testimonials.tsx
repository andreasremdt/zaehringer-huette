import Carousel from "./carousel";
import Icon from "./icon";

const testimonials = [
  {
    content:
      "Tolles Haus am Berg. Guter Ausgangspunkt zum Skifahren (direkt an der Piste), zum Wandern und Biken. Gemütlicher Wohnraum, sehr gut ausgestattete Küche.",
    author: "elan sportreisen",
  },
  {
    content:
      "Sehr schöne Hütte, die alles hat, was man braucht. Wir waren über das Wochenende mit 9 Leuten vor Ort. Es hat uns sehr gut gefallen. Auch die Abwicklung ist lobenswert. Im Winter kann die Hütte nicht angefahren werden. Wir hatten das Pech, dass wir Ende September den 1. Schnee hautnah miterleben durften. Der Fußmarsch war zwar anstrengend aber auch lustig. Wir kommen gerne wieder.",
    author: "Franz Peter Scherer",
  },
  {
    content:
      "Wundervoll urige große Hütte. Es gibt Strom und WLAN, geheizt wird mit einem wassergeführten Scheitholzofen - das ist einerseits urig, andererseits eine Herausforderung - es dauert 12h beständigen Nachlegens bis alles warm ist - und wenn man sich doof anstellt verraucht die Stube. Aber Lage und Ausstattung und Stil entschädigen dafür komplett.",
    author: "Thomas Rinneberg",
  },
  {
    content:
      "Wir haben unser Mädelswochenende überaus genossen in dieser wunderschönen Location. Die Hütte bietet mit einer sehr guten Ausstattung (Kaffeemaschine, Raclette, Crepemaker etc.) alles für eine entspannte Auszeit. Sehr netter Vermieter!",
    author: "Sandra Dippert",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 text-center md:py-32">
      <h2 className="mb-2 scroll-m-24 font-serif text-3xl md:text-4xl lg:text-5xl">
        Bewertungen
      </h2>
      <p className="mb-8">Was sagen andere Mieter zu unserer Hütte?</p>

      <div className="relative mx-auto max-w-5xl">
        <Carousel
          options={{
            next: {
              "aria-label": "Nächste Bewertung anzeigen",
              className:
                "from-primary-400 absolute right-0 top-0 flex h-full bg-gradient-to-l to-transparent pt-8",
            },
            prev: {
              "aria-label": "Vorherige Bewertung anzeigen",
              className:
                "from-primary-400 absolute left-0 top-0 flex h-full bg-gradient-to-r to-transparent pt-8",
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <figure
              className="min-w-0 flex-shrink-0 flex-grow-0 basis-full"
              key={testimonial.author}
            >
              <blockquote className="mx-auto mb-4 max-w-2xl">
                <p className="px-12 font-serif text-lg font-medium before:content-['“'] after:content-['”'] md:px-0 md:text-xl lg:text-2xl">
                  {testimonial.content}
                </p>
              </blockquote>
              <figcaption className="before:content-['-']">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
