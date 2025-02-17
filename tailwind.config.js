/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      maxWidth: {
        1300: "1300px",
      },
      colors: {
        color: "#1e1e24",
        bg: "#f7f7f2",
      },
      dropShadow: {
        ultraBright: "0 50px 70px rgba(255, 200, 160, 0.9)",
      },

      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
};
