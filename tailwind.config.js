module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#3e4061",
        secondary: "#3e4061",
        body: "#60a2bd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
