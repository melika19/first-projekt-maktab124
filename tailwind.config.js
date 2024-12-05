/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {},
    colors: {
      DEFAULT: "#008000",
      100: "#90EE90",
      200: "#00A86B",
    },
    spacing: {
      22: "5.5rem",
      30: "7.5rem",
    },
  },
  plugins: [],
};
