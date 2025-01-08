import Icon from "@/components/icon";

type Props = {
  state: "idle" | "loading" | "success" | "error";
};

export default function BookingFormAlert({ state }: Props) {
  if (state === "loading" || state === "idle") {
    return null;
  }

  return (
    <div
      role="alert"
      className="rounded-xl absolute inset-px bg-white/95 z-10 animate-fade-in flex flex-col items-center justify-center"
    >
      {state === "success" ? (
        <>
          <Icon name="check" className="size-10 mb-4 fill-primary-400" />
          <p className="font-serif text-2xl mb-2">
            Vielen Dank für Ihre Reservierung
          </p>
          <p className="text-center max-w-sm">
            Wir haben Ihre Nachricht erhalten und werden uns schnellst möglich
            bei Ihnen melden.
          </p>
        </>
      ) : (
        <>
          <Icon name="error" className="size-10 mb-4 fill-primary-400" />
          <p className="font-serif text-2xl mb-2">
            Das hat leider nicht geklappt
          </p>
          <p className="text-center max-w-sm">
            Aus technischen Gründen konnte Ihre Reservierung nicht gespeichert
            werden. Bitte versuchen Sie es später erneut.
          </p>
        </>
      )}
    </div>
  );
}
