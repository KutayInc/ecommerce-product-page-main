/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: "Kumbh Sans",
      },
      colors: {
        darkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        shadowBlack: "hsla(0, 0%, 0%, 0.75)",
        orange: "hsl(26, 100%, 55%)",
        orangeHover: "hsla(26, 100%, 55%, 0.75)",
        paleOrange: "hsl(25, 100%, 94%)",
      },
      width: {
        88: "94vw",
      },
    },
  },
  plugins: [],
};
