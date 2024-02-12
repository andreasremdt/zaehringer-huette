import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://zaehringer-huette.de",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  image: {
    domains: ["ik.imagekit.io"],
  },
});
