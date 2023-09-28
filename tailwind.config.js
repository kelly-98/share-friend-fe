/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#9A9A9A",
        "gray-333": "#333",
        "gray-3": "rgba(31, 31, 31, 0.70)",
        purple: "#725DFF",
      },
    },
  },
  plugins: [],
};
