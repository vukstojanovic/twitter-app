/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,tsx,ts}",
    "./components/**/*.{html,js,tsx,ts,jsx}",
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
