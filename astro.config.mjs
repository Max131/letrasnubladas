// @ts-check
import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://letrasnubladas.com",
  integrations: [sitemap()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
