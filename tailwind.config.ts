import tailwindTypography from "@tailwindcss/typography";
import { fontFamily as defaultFontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";

export default {
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
      typography: ({ theme }: PluginUtils) => ({
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
              paddingBottom: theme("spacing.5"),
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
              paddingRight: theme("spacing.4"),
              paddingTop: theme("spacing.2"),
              borderRadius: theme("borderRadius.DEFAULT"),
              paddingBottom: theme("spacing.2"),
              backgroundColor: theme("colors.ednoesco.secondary-background"),
            },
            "blockquote p": {
              paddingBottom: theme("spacing.0"),
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            ul: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
              paddingLeft: theme("spacing.0"),
              listStylePosition: "inside",
            },
            ol: {
              marginTop: theme("spacing.2"),
              marginBottom: theme("spacing.5"),
              paddingLeft: theme("spacing.0"),
              listStylePosition: "inside",
            },
            li: {
              marginTop: theme("spacing.0"),
              marginBottom: theme("spacing.0"),
              "&::marker": {
                fontFamily: "BerkeleyMono",
              },
            },
            "ol > li": {
              paddingLeft: theme("spacing.2"),
            },
            "ul > li": {
              paddingLeft: theme("spacing.2"),
            },
            "> ul > li > *:first-child": {
              marginTop: theme("spacing.5"),
            },
            "> ul > li > *:last-child": {
              marginBottom: theme("spacing.5"),
            },
            "> ol > li > *:first-child": {
              marginTop: theme("spacing.5"),
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
  plugins: [tailwindTypography({ className: "markdown" })],
} satisfies Config;
