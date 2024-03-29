/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", /* needed to run dark mode based on a class */
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FF4500', 
        secondary: '#007BFF', 
        accent: '#6C757D',
      },
      fontFamily: {
        burtons: "burtons",
      },
      fontFamily: {
        cheque: "cheque",
      },
    },
  },
  plugins: [],
};
