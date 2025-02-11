/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      maxWidth: {
        1340: ["1340px"],
      },
      backgroundColor: {
        grow_bg: "#2B2B2B",
      },
      fontFamily: {
        font: ["Signika", "sans-serif"],
        fontRoboto: ["Roboto", "sans-serif"],
        font_worksans: ["Work Sans", "serif"],
      },
    },
  },
  plugins: [],
};
