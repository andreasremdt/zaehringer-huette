import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jost)", ...theme.fontFamily.sans],
        serif: ["var(--font-cormorant-garamond)", ...theme.fontFamily.serif],
      },
      colors: {
        primary: {
          "50": "#f8f5f0",
          "100": "#f2ece2",
          "200": "#e3d7c5",
          "300": "#d1bca0",
          "400": "#be9d79",
          "500": "#b1865e",
          "600": "#a37453",
          "700": "#885e46",
          "800": "#6f4d3d",
          "900": "#5a4134",
          "950": "#30211a",
        },
        secondary: {
          "50": "#f4f9f8",
          "100": "#dbece8",
          "200": "#b7d8d3",
          "300": "#8abeb7",
          "400": "#629f98",
          "500": "#48847e",
          "600": "#386966",
          "700": "#305553",
          "800": "#294645",
          "900": "#263b3a",
          "950": "#122222",
        },
      },
      animation: {
        "fade-in": "fade-in 0.25s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", scale: "0.9" },
          "100%": { opacity: "100", scale: "1" },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
