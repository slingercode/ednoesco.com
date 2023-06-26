const defaultFontFamily = require("tailwindcss/defaultTheme").fontFamily;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,tsx}"],
  theme: {
    extend: {
      colors: {
        ednoesco: {
          accent: {
            high: "var(--accent-high)",
            low: "var(--accent-low)",
            border: "var(--accent-border)",
          },
          primary: "var(--primary)",
          background: "var(--background)",
          "secondary-background": "var(--secondary-background)",
        },
      },
      fontFamily: {
        sans: ["SatoshiRegular", ...defaultFontFamily.sans],
        mono: ["BerkeleyMono", ...defaultFontFamily.mono],
      },
    },
  },
  plugins: [],
};
