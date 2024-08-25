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
          "50": "#fef6ee",
          "100": "#fcecd8",
          "200": "#f9dabb",
          "300": "#f3b67e",
          "400": "#ed8d4a",
          "500": "#e96f26",
          "600": "#da561c",
          "700": "#b54019",
          "800": "#90351c",
          "900": "#742e1a",
          "950": "#3f140b",
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
    },
  },
  plugins: [],
};
export default config;
