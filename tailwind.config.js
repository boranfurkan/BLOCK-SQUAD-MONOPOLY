import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D92323",
        primaryBorder: "#F32425",
        "dark-gray": "#1D1D1D",
        "dark-gray-2": "#272727",
        "light-gray": "#7D7D7D",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(89.87deg, #000000 -2.49%, #F32425 254.58%)",
        "primary-light-gradient":
          "linear-gradient(90.79deg, #0B0B0B 0.68%, #F32425 264.34%)",
      },
      fontFamily: {
        anton: ["var(--font-anton)"],
        akira: ["akira", "sans-serif"],
        armata: ["var(--font-armata)", "sans-serif"],
      },
      brightness: {
        50: ".5",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
