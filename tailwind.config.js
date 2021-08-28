module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        light: "#F3F3F3",
        regular: "#E5E5E5",
        dark: "#7D7D7D",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
