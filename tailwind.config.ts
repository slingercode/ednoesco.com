import tailwindTypography from "@tailwindcss/typography";
import { fontFamily as defaultFontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";
import type { PluginUtils } from "tailwindcss/types/config";

const defaultTypographyModifiers = (theme: PluginUtils["theme"]) => ({
  h1: {
    fontFamily: "var(--satoshi-medium)",
    fontWeight: theme("fontWeight.medium"),
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.10"),
    fontSize: theme("fontSize.xl"),
  },
  h2: {
    fontFamily: "var(--satoshi-medium)",
    fontWeight: theme("fontWeight.medium"),
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
    fontSize: theme("fontSize.lg"),
  },
  h3: {
    fontFamily: "var(--satoshi-medium)",
    fontWeight: theme("fontWeight.medium"),
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
    fontSize: theme("fontSize.md"),
  },
  h4: {
    fontFamily: "var(--satoshi-medium)",
    fontWeight: theme("fontWeight.medium"),
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
    fontSize: theme("fontSize.base"),
  },
  a: {
    fontFamily: "var(--berkeley-mono)",
    fontSize: theme("fontSize.base"),
    "&:hover": {
      color: theme("colors.ednoesco.accent.low"),
    },
  },
  p: {
    margin: theme("spacing.0"),
    paddingBottom: theme("spacing.5"),
    lineHeight: theme("lineHeight.relaxed"),
    fontSize: theme("fontSize.base"),
  },
  img: {
    borderRadius: theme("borderRadius.DEFAULT"),
  },
  strong: {
    fontFamily: "var(--satoshi-black)",
    fontWeight: theme("fontWeight.medium"),
    fontSize: theme("fontSize.base"),
  },
  hr: {
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
  },
  blockquote: {
    quotes: "none",
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
    fontFamily: "var(--berkeley-mono)",
    fontSize: theme("fontSize.base"),
    paddingLeft: theme("spacing.4"),
    paddingRight: theme("spacing.4"),
    paddingTop: theme("spacing.0"),
    paddingBottom: theme("spacing.0"),
    borderRadius: theme("borderRadius.DEFAULT"),
    backgroundColor: theme("colors.ednoesco.secondary-background"),
  },
  "blockquote p": {
    paddingBottom: theme("spacing.0"),
    fontSize: theme("fontSize.base"),
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
    fontSize: theme("fontSize.base"),
  },
  ol: {
    marginTop: theme("spacing.2"),
    marginBottom: theme("spacing.5"),
    paddingLeft: theme("spacing.0"),
    listStylePosition: "inside",
    fontSize: theme("fontSize.base"),
  },
  li: {
    marginTop: theme("spacing.0"),
    marginBottom: theme("spacing.0"),
    fontSize: theme("fontSize.base"),
    "&::marker": {
      fontFamily: "var(--berkeley-mono)",
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
    backgroundColor: theme("colors.ednoesco.code-background"),
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
    backgroundColor: `${theme("colors.ednoesco.code-background")} !important`,
  },
  "--tw-prose-body": theme("colors.ednoesco.primary"),
  "--tw-prose-headings": theme("colors.ednoesco.primary"),
  "--tw-prose-links": theme("colors.ednoesco.accent.high"),
  "--tw-prose-bold": theme("colors.ednoesco.primary"),
  "--tw-prose-bullets": theme("colors.ednoesco.accent.high"),
  "--tw-prose-quotes": theme("colors.ednoesco.accent.high"),
  "--tw-prose-quote-borders": theme("colors.ednoesco.accent.border"),
  "--tw-prose-code": theme("colors.ednoesco.accent.high"),
});

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
          "code-background": "var(--code-background)",
        },
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        md: "var(--font-size-md)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-xxl)",
        "3xl": "var(--font-size-xxxl)",
      },
      fontFamily: {
        medium: ["var(--satoshi-medium)"],
        sans: ["var(--satoshi-regular)", ...defaultFontFamily.sans],
        mono: ["var(--berkeley-mono)", ...defaultFontFamily.mono],
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
          css: [{ ...defaultTypographyModifiers(theme) }],
        },
        // TODO: Create screen breakpoints, https://tailwindcss.com/docs/typography-plugin#applying-a-type-scale
        // sm: {
        //   css: [
        //     {
        //       ...defaultTypographyModifiers(theme),
        //       h1: {
        //         ...defaultTypographyModifiers(theme).h1,
        //         fontSize: theme("fontSize.3xl"),
        //       },
        //     },
        //   ],
        // },
      }),
    },
  },
  plugins: [tailwindTypography({ className: "markdown" })],
} satisfies Config;
