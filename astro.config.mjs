// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Import tailwind

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://monokernel.com", // Updated site URL
  integrations: [tailwind()], // Added tailwind, removed mdx and sitemap
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
