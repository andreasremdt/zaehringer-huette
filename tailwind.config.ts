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
          400: "#f8f5f0",
          DEFAULT: "#f9dabb",
        },
        secondary: {
          DEFAULT: "#122222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
