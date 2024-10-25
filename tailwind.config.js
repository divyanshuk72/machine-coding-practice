/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#cc4141",
      },
      minWidth: {
        custom: "180px",
      },
    },
  },
  plugins: [],
};
