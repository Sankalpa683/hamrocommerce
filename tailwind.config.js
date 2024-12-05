/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure your content path includes all directories with Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
