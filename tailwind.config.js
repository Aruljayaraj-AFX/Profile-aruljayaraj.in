export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Inter Placeholder', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        codesaver: ["CodeSaver", "sans-serif"],
        bodoni: ["'Bodoni Moda'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};