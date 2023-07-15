/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tw-display": ["'Inter Tight'", "sans-serif"],
        "tw-normal": ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
