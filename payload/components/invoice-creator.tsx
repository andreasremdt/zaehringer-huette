import type { TextFieldServerProps } from "payload";
import InvoiceCreatorClient from "./invoice-creator.client";

export default function InvoiceCalendar({ data }: TextFieldServerProps) {
  return <InvoiceCreatorClient data={data} />;
}
