/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx,ts}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        twitter: "#00ADED",
      },
    },
  },
  plugins: [],
};
