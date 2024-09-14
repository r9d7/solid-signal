import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com", // TODO: Replace
  integrations: [mdx(), sitemap(), UnoCss({ injectReset: true })],
  devToolbar: { enabled: false },
});
