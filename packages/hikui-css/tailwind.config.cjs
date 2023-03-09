// eslint-disable-next-line
const jsonToken = require("./src/lib/token.json");

/** @type {import('tailwindcss').Config} */ // eslint-disable-next-line
module.exports = {
  content: ["index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      ...jsonToken,
    },
  },
  plugins: [],
};
