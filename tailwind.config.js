const {
  blackA,
  whiteA,
  mauveDark,
  pinkDark,
  greenDark,
  yellowDark,
  purpleDark,
  orangeDark,
  redDark,
  blueDark,
  cyanDark,
  crimsonDark,
} = require('@radix-ui/colors');

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: blackA.blackA12,
        white: whiteA.whiteA12,
        pink: {
          solid: pinkDark.pink9,
        },
        green: {
          solid: greenDark.green9,
          font: {
            low: greenDark.green11,
          },
        },
        yellow: {
          solid: yellowDark.yellow9,
          font: {
            low: yellowDark.yellow11,
          },
        },
        purple: {
          solid: purpleDark.purple9,
          font: {
            low: purpleDark.purple11,
          },
        },
        orange: {
          solid: orangeDark.orange9,
        },
        red: {
          solid: redDark.red9,
        },
        blue: {
          solid: blueDark.blue9,
          font: {
            low: blueDark.blue11,
          },
        },
        cyan: {
          font: {
            low: cyanDark.cyan11,
          },
        },
        crimson: {
          font: {
            low: crimsonDark.crimson11,
          },
        },
        gray: {
          solid: mauveDark.mauve9,
          background: {
            main: mauveDark.mauve1,
            code: mauveDark.mauve2,
            component: mauveDark.mauve3,
            hover: mauveDark.mauve4,
            active: mauveDark.mauve5,
          },
          border: {
            'non-interactive': mauveDark.mauve6,
            interactive: mauveDark.mauve7,
            hover: mauveDark.mauve8,
          },
          font: {
            low: mauveDark.mauve11,
            high: mauveDark.mauve12,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['focus-visible'],
      borderRadius: ['focus-visible'],
      outline: ['focus-visible'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
    },
  },
  plugins: [],
};
