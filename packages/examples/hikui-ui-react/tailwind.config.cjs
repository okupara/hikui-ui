// eslint-disable-next-line
const { theme } = require("@hikui-ui/css");

/** @type {import('tailwindcss').Config} */ // eslint-disable-next-line
module.exports = {
  content: ["index.html", "./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
