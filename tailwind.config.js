module.exports = {
  mode: "jit",
  darkmode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: "rgb(255 247 237)",
        "dusty-blue": "rgb(140,157,173)",
        "metallic-gold": "rgb(212, 175, 55)",
      },
      fontFamily: {
        handsta: ["Handsta Signature Regular", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
