/** @type {import('tailwindcss').Config} */ // eslint-disable-next-line
module.exports = {
  content: ["index.html", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F5F7FA",
          100: "#E4E7EB",
          200: "#CBD2D9",
          300: "#9AA5B1",
          400: "#7B8794",
          500: "#616E7C",
          600: "#52606D",
          700: "#3E4C59",
          800: "#323F4B",
          900: "#1F2933",
        },
        blue: {
          50: "#E6F6FF",
          100: "#BAE3FF",
          200: "#7CC4FA",
          300: "#47A3F3",
          400: "#2186EB",
          500: "#0967D2",
          600: "#0552B5",
          700: "#03449E",
          800: "#01337D",
          900: "#002159",
        },
        yellow: {
          50: "#FFFBEA",
          100: "#FFF3C4",
          200: "#FCE588",
          300: "#FADB5F",
          400: "#F7C948",
          500: "#F0B429",
          600: "#DE911D",
          700: "#CB6E17",
          800: "#B44D12",
          900: "#8D2B0B",
        },
      },
    },
  },
  plugins: [],
};
