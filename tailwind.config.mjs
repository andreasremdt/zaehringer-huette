import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...theme.fontFamily.sans],
        serif: ["Cormorant Garamond", ...theme.fontFamily.serif],
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
