/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00070d",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        alternative: "#01586a",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        white: "#ffffff",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
