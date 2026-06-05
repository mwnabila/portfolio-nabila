/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#0e0e0e",
        border: "#1a1a1a",
        primary: "#e8e8e8",
        secondary: "#888888",
        accent: "#4D8DFF",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
