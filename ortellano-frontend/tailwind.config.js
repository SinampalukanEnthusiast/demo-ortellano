/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {},
    },
  },
  plugins: [],
};

// {`py-4 px-8 rounded-lg hover:bg-green-700 hover:text-white text-green-700 text-4xl bg-white ${conv.className}`
