/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        typewriter:
          "typewriter 3s steps(30) 1s 1 normal both, blink 0.5s step-end infinite",
      },
    },
  },
  plugins: [],
};
