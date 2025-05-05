
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          white: {
            whitest: "#FFFFFF",
            DEFAULT: "#F4F4F4"
          },
          green: {
            DEFAULT: "#65ad45"
          }
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        fontSize: {
          h1: ["3rem", "4rem"],
          h2: ["2.5rem", "3.5rem"],
          h3: ["2rem", "2.75rem"],
          h4: ["1.5rem", "2rem"],
          h5: ["1rem", "1.4rem"],
          body: ["0.875rem", "1.25rem"],
          finePrint: ["0.75rem", "1rem"],
          tiny: ["0.6875rem", "0.9375rem"],
        },
        gridTemplateColumns: {
          16: "grid-template-columns: repeat(16, minmax(0, 1fr));",
        },
        screens: {
          md: "780px",
          lg: "1028px",
          xl: "1280px",
        },
        transitionProperty: {
          "max-height": "max-height"
        }
      },
    },
    plugins: [],
  }