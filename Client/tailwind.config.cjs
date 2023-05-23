module.exports = {
  content: ["./src/**/*.{cjs.js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(248,28,229,0.65)",
        secondary: "#4bf4e0",
        "sec-text": "#646464",
        success: "#4caf50",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
        light: "#fafafa",
        dark: "#212121",
        white: "#ffffff",
        black: "#000000",
        code: "#24292e",
        bgPurple: "rgba(111,66,193,0.65)",
        bgPink: "rgba(255,107,237,0.35)",
        bgBlue: "rgba(117,149,255,0.3)",
      },
      keyframes: {
        marqueeX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeY: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        marqueeX: 'marqueeX 25s linear infinite',
        marqueeY: 'marqueeY 25s linear infinite',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
  darkMode: "class",
};
