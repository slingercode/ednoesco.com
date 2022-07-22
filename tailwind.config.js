/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mauve: {
        bg: "hsl(246, 6.0%, 9.0%)",
        low: "hsl(253, 4.0%, 63.7%)",
        high: "hsl(256, 6.0%, 93.2%)",
      },
      yellow: {
        low: "hsl(48, 100%, 47.0%)",
        high: "hsl(53, 100%, 91.0%)",
      },
    },
  },
  plugins: [],
};

const mauveDark = {
  mauve1: "hsl(246, 6.0%, 9.0%)",
  mauve2: "hsl(240, 5.1%, 11.6%)",
  mauve3: "hsl(241, 5.0%, 14.3%)",
  mauve4: "hsl(242, 4.9%, 16.5%)",
  mauve5: "hsl(243, 4.9%, 18.8%)",
  mauve6: "hsl(244, 4.9%, 21.5%)",
  mauve7: "hsl(245, 4.9%, 25.4%)",
  mauve8: "hsl(247, 4.8%, 32.5%)",
  mauve9: "hsl(252, 4.0%, 45.2%)",
  mauve10: "hsl(247, 3.4%, 50.7%)",
  mauve11: "hsl(253, 4.0%, 63.7%)",
  mauve12: "hsl(256, 6.0%, 93.2%)",
};

const yellowDark = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)",
};

const amberDark = {
  amber1: "hsl(36, 100%, 6.1%)",
  amber2: "hsl(35, 100%, 7.6%)",
  amber3: "hsl(32, 100%, 10.2%)",
  amber4: "hsl(32, 100%, 12.4%)",
  amber5: "hsl(33, 100%, 14.6%)",
  amber6: "hsl(35, 100%, 17.1%)",
  amber7: "hsl(35, 91.0%, 21.6%)",
  amber8: "hsl(36, 100%, 25.5%)",
  amber9: "hsl(39, 100%, 57.0%)",
  amber10: "hsl(43, 100%, 64.0%)",
  amber11: "hsl(39, 90.0%, 49.8%)",
  amber12: "hsl(39, 97.0%, 93.2%)",
};
