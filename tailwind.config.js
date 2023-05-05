/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: "#f44250",
        darkColor: "#080A1A",
        blackColor: "#000",
        lightColor: "#fafafa",
        grayColor: "#cecece",
        switchMode: "#eeb004",
        border: "#4b5563",
        borderColor: "#e2e8f0",
        darkBlue: "#0B0f29",
        lightBlue: "#38bdf8",
        transparent: "transparent",
      },
      screens: {
        xs: { min: "416px", max: "639px" },
        xxs: { max: "415px" },
      },
      spacing: {
        18: "66px",
      },
      padding: {
        3.5: "15px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0,0.7))",
      },
    },
    keyframes: {
      bounce: {
        "0%": {
          top: "10px",
          height: "5px",
          transform: "scaleX(2)",
          borderRadius: "60px 60px 20px 20px",
        },
        "35%": { height: "19px", transform: "scaleX(1)", borderRadius: "50%" },
        "100%": { top: "0" },
      },
    },
  },
  plugins: [],
};
