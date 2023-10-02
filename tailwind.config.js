/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d0833",
        "d-pri": "#08051e",
        "l-pri": "#100a42",
        "r-pri": "#120a42",
      },
    },
  },
  plugins: [],
};
