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
      /**
       * This is the definition for the styling on `Markdown` content
       *
       * Useful links:
       * - [Tailwind default theme](https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/stubs/config.full.js)
       * - [Tailwind typography theme definition](https://raw.githubusercontent.com/tailwindlabs/tailwindcss-typography/master/src/styles.js)
       */
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h1: {
              fontFamily: "SatoshiMedium",
              fontWeight: theme("fontWeight.medium"),
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.10"),
            },
            h2: {
              fontFamily: "SatoshiMedium",
              fontWeight: theme("fontWeight.medium"),
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
            },
            h3: {
              fontFamily: "SatoshiMedium",
              fontWeight: theme("fontWeight.medium"),
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
            },
            h4: {
              fontFamily: "SatoshiMedium",
              fontWeight: theme("fontWeight.medium"),
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
            },
            a: {
              fontFamily: "BerkeleyMono",
              "&:hover": {
                color: theme("colors.ednoesco.accent.low"),
              },
            },
            p: {
              margin: theme("spacing.0"),
              lineHeight: theme("lineHeight.relaxed"),
            },
            strong: {
              fontFamily: "SatoshiBlack",
              fontWeight: theme("fontWeight.medium"),
            },
            hr: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
            },
            blockquote: {
              quotes: "none",
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
              fontFamily: "BerkeleyMono",
              fontSize: theme("fontSize.sm"),
              paddingLeft: theme("spacing.4"),
              paddingTop: theme("spacing.2"),
              borderRadius: theme("borderRadius.DEFAULT"),
              paddingBottom: theme("spacing.2"),
              backgroundColor: theme("colors.ednoesco.secondary-background"),
            },
            ul: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
              paddingLeft: theme("spacing.0"),
              listStylePosition: "inside",
            },
            li: {
              listStylePosition: "inside",
              marginTop: theme("spacing.0"),
              marginBottom: theme("spacing.0"),
            },
            "> ul > li > *:last-child": {
              marginBottom: theme("spacing.5"),
            },
            "> ol > li > *:last-child": {
              marginBottom: theme("spacing.5"),
            },
            code: {
              quotes: "none",
              borderRadius: theme("borderRadius.DEFAULT"),
              fontSize: theme("fontSize.sm"),
              paddingTop: theme("spacing.px"),
              paddingBottom: theme("spacing.px"),
              paddingLeft: theme("spacing[1.5]"),
              paddingRight: theme("spacing[1.5]"),
              backgroundColor: theme("colors.ednoesco.secondary-background"),
            },
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
            pre: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
              borderRadius: theme("borderRadius.DEFAULT"),
              backgroundColor: `${theme(
                "colors.ednoesco.secondary-background",
              )} !important`,
            },
            "--tw-prose-body": theme("colors.ednoesco.primary"),
            "--tw-prose-headings": theme("colors.ednoesco.primary"),
            "--tw-prose-links": theme("colors.ednoesco.accent.high"),
            "--tw-prose-bold": theme("colors.ednoesco.primary"),
            "--tw-prose-bullets": theme("colors.ednoesco.accent.high"),
            "--tw-prose-quotes": theme("colors.ednoesco.accent.high"),
            "--tw-prose-quote-borders": theme("colors.ednoesco.accent.border"),
            "--tw-prose-code": theme("colors.ednoesco.accent.high"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      className: "markdown",
    }),
  ],
};
