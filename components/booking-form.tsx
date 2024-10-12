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

  console.log(errors);
  return (
    <form
      className="mx-auto max-w-7xl items-start gap-16 px-4 pb-16 md:pb-24 lg:flex"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="hidden"
        {...register("range", {
          required:
            "Bitte wählen Sie den gewünschten Zeitraum im Kalendar aus.",
        })}
      />

      <div className="lg:basis-2/3">
        <h3 className="mb-4 font-serif text-2xl md:mb-8 md:text-3xl lg:text-4xl">
          Zeitraum auswählen
        </h3>

        <DatePicker
          onSelect={(range) => {
            setValue("range", range);

            if (range?.from && range?.to) {
              clearErrors("range");
            }
          }}
          selected={getValues("range")}
        />

        <hr className="my-8 border-stone-300" />

        <h2
          className="mb-4 scroll-m-48 font-serif text-2xl md:text-3xl lg:text-4xl"
          id="preise"
        >
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
            Die Holzpauschale beträgt <b>60€</b> im Winter (November - Mai) und{" "}
            <b>30€</b> im Sommer (Juni - Oktober).
          </li>
          <li>
            Alle Preise gelten zuzüglich der Kurtaxe der Gemeinde Feldberg.
            Erwachsene <b>2,90€</b> pro Person/Tag, Kinder im Alter von 6 - 15
            Jahren <b>1,20€</b> pro Person/Tag
          </li>
        </ul>

        <hr className="my-8 border-stone-300" />

        <h3 className="mb-4 font-serif text-2xl md:text-3xl lg:text-4xl">
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

      <div className="mt-8 md:mt-0 lg:basis-1/3">
        <fieldset className="relative rounded-xl border border-stone-300 bg-white p-4 md:p-8">
          <legend className="absolute font-serif text-2xl lg:text-3xl">
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
                value={getValues("adults")}
                required
                {...register("adults", {
                  required: "Bitte geben die Anzahl der Gäste an.",
                  valueAsNumber: true,
                  validate: (value, formValues) => {
                    const adults = value;
                    const kids = formValues.kids;

                    if (adults + kids < 4) {
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
                value={getValues("kids")}
                className="flex-1"
                {...register("kids", {
                  valueAsNumber: true,
                  validate: (value, formValues) => {
                    const adults = formValues.adults;
                    const kids = value;

                    if (adults + kids >= 4 && adults > 0) {
                      clearErrors("adults");
                    } else {
                      if (adults === 0 && kids > 0) {
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
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-secondary-950 md:gap-4 md:text-sm"
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
