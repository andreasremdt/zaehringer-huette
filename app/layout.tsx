import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["600", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "Zähringer Hütte",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={cn(
          jost.variable,
          cormorantGaramond.variable,
          "bg-primary-50 font-sans text-secondary-950",
        )}
      >
        <a
          href="#content"
          className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-t-none bg-primary-50 px-4 py-2 transition-transform focus:translate-y-0"
        >
          Zum Inhalt springen
        </a>

        <Header />

        <main id="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
