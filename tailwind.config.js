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
        DEFAULT: "#FF0000",
      },
      green: {
        DEFAULT: "#409826",
        80: "#004040",
      },
      purple: {
        DEFAULT: "#80334B",
        10: "#AF8E9A",
        30: "#935870",
      },
      gray: {
        DEFAULT: "#E5E5E5",
        5: "#0000001A",
        10: "#00000029",
        15: "#00000033",
        25: "#00000066",
        30: "#B2B2B2",
        35: "#E5E5E5",
        44: "#CECECE",
        45: "#C7C7CC",
        50: "#707070",
        60: "#676069",
        65: "#22222280",
        70: "#808080",
        80: "#8E8E93",
      },
      white: {
        DEFAULT: "#ffffff",
        5: "#FAFAFD",
        6: "#FAFAFA",
        10: "#F8F8F8",
      },
      black: {
        DEFAULT: "#000000",
      },
      transparent: "transparent",
    },
    screens: {
      sm: "640px",
      md: "768px",
      1000: "1000px",
      lg: "1024px",
      lp: "1440px",
      hd: "1920px",
    },
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)", "sans-serif"],
      },
      zIndex: {
        1000: "1000",
      },
      keyframes: {
        expand: {
          "0%": {
            visibility: "hidden",
            opacity: "0",
          },
          "30%": {
            visibility: "visible",
            opacity: "0",
          },
          "100%": {
            visibility: "visible",
            opacity: "1",
          },
        },
      },
      animation: {
        expand: "expand 0.3s forwards",
      },
    },
  },
  safelist: ["line-clamp-3", "line-clamp-4", "line-clamp-6", "line-clamp-8"],
  plugins: [],
};
