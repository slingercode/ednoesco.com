import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  experimental: {
    contentCollectionCache: true,
  },
  prefetch: {
    prefetchAll: false,
  },
  integrations: [tailwind()],
});
