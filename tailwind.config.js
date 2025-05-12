// tailwind.config.js
module.exports = {
  darkMode: 'class', // O 'class' si quieres controlarlo tú con <html class="dark">
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
