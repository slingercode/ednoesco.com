import { defineConfig } from "astro/config";

export default defineConfig({
  output: 'static',
  prefetch: {
    defaultStrategy: "viewport",
  },
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
});
