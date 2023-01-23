/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "main-color": "#5359D1",
      "secondary-color": "#8EA7E9",
      dark: "#111111",
      silver: "#ecebff",
      transparent: "transparent",
      current: "currentColor",
      white: "#ecebff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },
  plugins: [],
};
