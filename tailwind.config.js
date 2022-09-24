/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx,ts}",
    "./components/**/*.{html,js,jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        twitter: "#00ADED",
      },
    },
  },
  plugins: [],
};
