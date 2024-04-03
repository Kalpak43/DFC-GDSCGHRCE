module.exports = {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.2) rotate(45deg)" },
          "50%": { transform: "scale(1.4) rotate(90deg)" },
          "75%": { transform: "scale(1.2) rotate(135deg)" },
        },
      },
    },
  },
  plugins: [],
};
