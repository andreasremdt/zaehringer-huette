"use client";

import createBooking, { type BookingData } from "@/actions/create-booking";
import BookingSummary from "@/components/booking-summary";
import DatePicker from "@/components/date-picker";
import Icon from "@/components/icon";
import Input from "@/components/input";
import Select from "@/components/select";
import Textarea from "@/components/textarea";
import { countries } from "@/lib/countries";
import { getBookedDays } from "@/lib/utils";
import type { Booking, CalendarBlock, Cost } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import BookingFormAlert from "./booking-form-alert";

type Props = CalendarBlock & {
  bookings: Booking[];
  costs: Cost;
};

export default function BookingFormClient({ content, costs, bookings }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<BookingData>();

  async function onSubmit(formData: BookingData) {
    setState("loading");

    const result = await createBooking(formData);

    if (result.success) {
      return setState("success");
    }

    if (result.errors) {
      setState("idle");

      for (const [field, [message]] of Object.entries(result.errors)) {
        setError(field as keyof BookingData, { message });
      }
    } else {
      setState("error");
    }
  }

  return (
    <form
      className="mx-auto max-w-7xl items-start gap-16 px-4 pb-16 md:pb-24 lg:flex"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        className="absolute left-[-9999px]"
        tabIndex={-1}
        autoComplete="new-password"
        {...register("newPassword")}
      />

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
          disabled={getBookedDays(bookings)}
        />

        <hr className="my-8 border-stone-300" />

        {content ? (
          <RichText
            data={content}
            className="prose max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:text-3xl prose-h3:text-2xl prose-a:font-normal"
          />
        ) : null}
      </div>

      <div className="relative mt-8 md:mt-0 lg:basis-1/3">
        <BookingFormAlert state={state} />

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

            <Input
              type="text"
              id="phone"
              label="Ihre Telefonnummer"
              {...register("phone")}
            />

            <hr />

            <Input
              type="text"
              id="address"
              label="Straße und Hausnummer"
              required
              {...register("address", {
                required: "Bitte geben Sie Ihre Straße und Hausnummer an.",
              })}
              error={errors.address?.message}
            />

            <div className="flex gap-4">
              <Input
                type="text"
                id="zip"
                className="w-1/3"
                label="PLZ"
                required
                {...register("zip", {
                  required: "Bitte geben Sie Ihre PLZ an.",
                })}
                error={errors.zip?.message}
              />
              <Input
                type="text"
                id="city"
                className="w-2/3"
                label="Stadt"
                required
                {...register("city", {
                  required: "Bitte geben Sie Ihre Stadt an.",
                })}
                error={errors.city?.message}
              />
            </div>

            <Select
              id="country"
              label="Land"
              value={getValues("country")}
              required
              {...register("country", {
                required: "Bitte geben Sie Ihr Land an.",
              })}
              error={errors.country?.message}
            >
              <option value="" />
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>

            <hr />

            <div className="flex gap-4">
              <Select
                id="adults"
                className="flex-1"
                label="Erwachsene"
                value={getValues("adults")}
                required
                {...register("adults", {
                  required: "Bitte geben Sie die Anzahl der Gäste an.",
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
                <option value="0" />
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
                <option value="0" />
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

            <Textarea
              id="comments"
              label="Anmerkungen / Wünsche"
              {...register("comments")}
            />

            <BookingSummary
              costs={costs}
              range={watch("range")}
              adults={watch("adults")}
              kids={watch("kids")}
              error={errors.range?.message}
            />

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-secondary-950 md:gap-4 md:text-sm disabled:opacity-75 disabled:hover:bg-secondary-950 disabled:hover:text-white"
              disabled={state === "loading"}
            >
              {state !== "loading" ? (
                <Icon name="send" className="size-5" />
              ) : null}
              {state === "loading" ? "Bitte warten..." : "Jetzt anfragen *"}
            </button>

            <p className="text-sm">
              * Die Anfrage ist unverbindlich und stellt keine feste
              Reservierung oder Kaufbestätitung dar.
            </p>
          </div>
        </fieldset>
      </div>
    </form>
  );
}
