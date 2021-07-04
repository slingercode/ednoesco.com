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
        },
        purple: {
          solid: purpleDark.purple9,
        },
        orange: {
          solid: orangeDark.orange9,
        },
        red: {
          solid: redDark.red9,
        },
        blue: {
          font: {
            low: blueDark.blue11,
          },
        },
        gray: {
          background: {
            main: mauveDark.mauve1,
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
