module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        slingercode: {
          accent: '#ffd369',
          background: '#222831',
          fontColor: '#eeeeee',
          dark: '#393e46',
          boxBackground: '#323232',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
