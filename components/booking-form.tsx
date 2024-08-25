"use client";

import type { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import Icon from "@/components/icon";
import Input from "@/components/input";
import Select from "@/components/select";
import Textarea from "@/components/textarea";
import DatePicker from "@/components/date-picker";
import BookingSummary from "@/components/booking-summary";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  comments?: string;
  adults: number;
  kids: number;
  range?: DateRange;
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <form
      className="mx-auto flex max-w-7xl items-start gap-16 px-4 pb-16 md:pb-24"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="hidden"
        {...register("range", {
          required:
            "Bitte wählen Sie den gewünschten Zeitraum im Kalendar aus.",
        })}
      />

      <div className="basis-2/3">
        <header className="mb-8 border-b border-stone-300 pb-8 md:mb-16 md:pb-16">
          <h2 className="mb-8 font-serif text-2xl md:text-3xl lg:text-4xl">
            Preise & Informationen
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Die Mindestzahl an Personen pro Reservierung liegt bei <b>4</b>.
              Maximal können <b>11 Personen</b> übernachten.
            </li>
            <li>
              Die Hütte ist nur <b>ab 3 Nächten</b> buchbar (Do-So oder So-Do)
            </li>
            <li>
              <b>300€</b> pro Übernachtung/ bei einer Belegung von 4 Personen
            </li>
            <li>
              Jede weitere Person <b>35€</b> / Übernachtung.
            </li>
            <li>
              Ab einer Reservierungsdauer von mehr als 5 Tagen erhalten Sie
              <b> 5% Rabatt</b> auf den Gesamtpreis
            </li>
            <li>
              Der verbrauchte Strom wird mit <b>40 ct/kwh</b> separat berechnet
            </li>
            <li>
              Die Endreinigung beträgt <b>80€</b>
            </li>
            <li>
              Die Holzpauschale beträgt <b>30€</b>
            </li>
            <li>
              Alle Preise gelten zuzüglich der Kurtaxe der Gemeinde Feldberg.
              Erwachsene <b>2,90€</b> pro Person/Tag, Kinder im Alter von 6 - 15
              Jahren <b>1,20€</b> pro Person/Tag
            </li>
          </ul>
        </header>

        <h3 className="mb-8 font-serif text-2xl md:text-3xl lg:text-4xl">
          Verfügbarkeit
        </h3>

        <DatePicker
          onSelect={(range) => {
            if (range?.from && range.to) {
              setValue("range", range);
              clearErrors("range");
            }
          }}
          selected={getValues("range")}
        />

        <hr className="my-16 border-stone-300" />

        <h3 className="mb-8 font-serif text-2xl md:text-3xl lg:text-4xl">
          Umfang
        </h3>

        <ul className="grid list-disc grid-cols-2 gap-x-8 gap-y-2 pl-6">
          <li>WLAN mit 50 mbit/s</li>
          <li>Moderne Küche mit Vollausstattung</li>
          <li>Kachelöfen</li>
          <li>Warmwasser</li>
          <li>Behindertengerechte Duschen und WCs</li>
        </ul>

        <hr className="my-16 border-stone-300" />

        <h3 className="mb-8 font-serif text-2xl md:text-3xl lg:text-4xl">
          Regeln
        </h3>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Eine Kaution von <b>200€</b> ist zu hinterlegen
          </li>
          <li>Haustiere sind nicht erlaubt</li>
          <li>
            Die Wohnung ist am Abreisetag bis <b>11 Uhr</b> (besenrein) zu
            übergeben
          </li>
        </ul>
      </div>

      <div className="sticky top-24 basis-1/3">
        <fieldset className="relative rounded-xl border border-stone-300 bg-white p-8">
          <legend className="absolute font-serif text-xl md:text-2xl lg:text-3xl">
            Ihre Angaben
          </legend>

          <div className="mt-16 space-y-6">
            <Input
              type="text"
              id="name"
              label="Ihr Vor- und Nachname"
              required
              {...register("name", {
                required: "Bitte geben Sie Ihren Namen an.",
              })}
              error={errors.name?.message}
            />

            <Input
              type="email"
              id="email"
              label="Ihre E-Mail-Adresse"
              required
              {...register("email", {
                required: "Bitte geben Sie Ihre E-Mail-Adresse an.",
                pattern: {
                  message: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                },
              })}
              error={errors.email?.message}
            />

            <div className="flex gap-4">
              <Select
                id="adults"
                className="flex-1"
                label="Erwachsene"
                required
                {...register("adults", {
                  required: "Bitte geben die Anzahl der Gäste an.",
                  valueAsNumber: true,
                  validate: (value, formValues) => {
                    const total = value + formValues.kids;

                    if (total < 4) {
                      return "Die Mindestzahl der Gäste beträgt 4.";
                    }

                    return true;
                  },
                })}
                error={errors.adults?.message}
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
              </Select>

              <Select
                id="kids"
                label="Kinder"
                className="flex-1"
                {...register("kids", {
                  valueAsNumber: true,
                  validate: (value, formValues) => {
                    const total = value + formValues.adults;

                    if (total >= 4 && formValues.adults > 0) {
                      clearErrors("adults");
                    } else {
                      if (formValues.adults === 0 && value > 0) {
                        setError("adults", {
                          message: "Es muss min. 1 Erwachsener anwesend sein.",
                        });
                      } else {
                        setError("adults", {
                          message: "Die Mindestzahl der Gäste beträgt 4.",
                        });
                      }
                    }

                    return true;
                  },
                })}
              >
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </div>

            <Input
              type="text"
              id="phone"
              label="Ihre Telefonnummer"
              {...register("phone")}
            />

            <Textarea
              id="comments"
              label="Anmerkungen / Wünsche"
              {...register("comments")}
            />

            <BookingSummary
              range={watch("range")}
              adults={watch("adults")}
              kids={watch("kids")}
              error={errors.range?.message}
            />

            <button
              type="submit"
              className="bg-primary-200 flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-xs font-medium uppercase md:gap-4 md:text-sm"
            >
              <Icon name="send" className="size-5" />
              Jetzt buchen
            </button>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
