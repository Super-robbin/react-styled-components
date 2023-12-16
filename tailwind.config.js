/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // We can use the font-family we previously imported from Google font here,
      // For this here in that theme setting under extend, we can add the font-family key
      // and then register a new font-family with any identifier of our choice.
      // Now title here, is a new name for a new font that I want to add to Tailwind.
      // And the value for that is an array where we now need
      // to specify the name of our font between double quotes inside of single quotes.
      // I can now go back to header(h1) and add font-title, it will come up.
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      },
    },
  },
  plugins: [],
};
