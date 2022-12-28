/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        prime_blue: "#2F80ED",
        prime_red: "#EB5757",
        prime_gray: "#BDBDBD",
        prime_black: "#333333",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        montserrat: "'Montserrat', sans-serif,'Noto Sans'",
      },
    },
  },
  plugins: [],
};
