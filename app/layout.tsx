import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import { cn } from "@/app/lib/utils";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import "@/app/styles/globals.css";

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
          "bg-primary-400 font-sans",
        )}
      >
        <a
          href="#content"
          className="bg-primary-400 absolute -top-1 left-1/2 z-10 -translate-x-1/2 -translate-y-full rounded-t-none px-4 py-2 transition-transform focus:translate-y-0"
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
