/** @type {import('tailwindcss').Config} */
import("tailwindcss").Config;

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'handwriting': ['Reenie Beanie', 'cursive'],
      'mono': ['IBM Plex Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};
