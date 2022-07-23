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
