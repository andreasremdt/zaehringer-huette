"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/input";
import Textarea from "@/components/textarea";
import Icon from "@/components/icon";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="name"
        label="Ihr Vor- und Nachname"
        required
        {...register("name", { required: "Bitte geben Sie Ihren Namen an." })}
        error={errors.name?.message}
      />
      <div className="flex flex-col gap-6 sm:flex-row md:gap-8">
        <Input
          type="email"
          id="email"
          label="Ihre E-Mail-Adresse"
          required
          className="flex-1"
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
          className="flex-1"
          {...register("phone")}
        />
      </div>
      <Textarea
        id="message"
        label="Ihre Nachicht"
        required
        {...register("message", {
          minLength: {
            value: 10,
            message: "Bitte schreiben Sie etwas mehr Text.",
          },
          required: "Bitte geben schreiben Sie Ihre Nachricht.",
        })}
        error={errors.message?.message}
      />
      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary-950 px-6 text-xs font-medium uppercase text-white transition-colors duration-300 ease-in-out hover:bg-primary-200 hover:text-secondary-950 md:gap-4 md:text-sm"
      >
        <Icon name="send" className="size-5" />
        Anfrage senden
      </button>
    </form>
  );
}
