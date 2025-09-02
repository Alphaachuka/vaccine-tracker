/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          light: "#E3F2F9",   // soft sky blue
          DEFAULT: "#90CAF9", // calm blue
          dark: "#42A5F5",    // stronger calm blue
        },
        accent: {
          light: "#FCE4EC",   // soft pink
          DEFAULT: "#F48FB1", // calm pink
          dark: "#EC407A",    // stronger pink
        },
        neutral: {
          light: "#F5F5F5",   // light gray
          DEFAULT: "#9E9E9E", // medium gray
          dark: "#424242",    // dark gray
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // modern, calm typography
        display: ["Poppins", "sans-serif"],           // for titles/headings
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)",
        medium: "0 8px 20px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
