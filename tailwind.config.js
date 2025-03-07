/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#182849",
        5: "#EFEFF4",
      },
      red: {
        DEFAULT: "##FF0000",
      },
      green: {
        DEFAULT: "##409826",
        80: "#004040",
      },
      purple: {
        DEFAULT: "##80334B",
        10: "#AF8E9A",
        30: "#935870",
      },
      gray: {
        DEFAULT: "#E5E5E5",
        5: "##0000001A",
        10: "##00000029",
        15: "#00000033",
        25: "#00000066",
        30: "##B2B2B2",
        35: "##E5E5E5",
        45: "#C7C7CC",
        50: "#707070",
        60: "##676069",
        65: "#22222280",
        70: "##808080",
        80: "#8E8E93",
      },
      white: {
        DEFAULT: "#ffffff",
        5: "#FAFAFD",
        10: "#F8F8F8",
      },
      black: {
        DEFAULT: "#000000",
      },
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
