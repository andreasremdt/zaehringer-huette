import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "@/app/styles/globals.css";
import { cn } from "@/app/lib/utils";

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
    <html lang="de">
      <body
        className={cn(jost.variable, cormorantGaramond.variable, "font-sans")}
      >
        {children}
      </body>
    </html>
  );
}
