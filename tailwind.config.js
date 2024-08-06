/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        labPurple: "#130B1F",
        labPurpleLight: "#9966CC",
        labGreen: "#228B22",
        labGreenLight: "#6699CC",
      },
      fontFamily: {
        Avenir: ["Avenir", "Regular"],
        AvenirLigth: ["AvenirLight", "Light"],
        AvenirHeavy: ["AvenirHeavy", "Heavy"],
        AvenirBlack: ["AvenirBlack", "Black"],
      },
    },
  },
  plugins: [],
};
