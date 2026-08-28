import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12141A",
          soft: "#181B23",
          softer: "#20242F",
          line: "#2A2F3B",
        },
        paper: {
          DEFAULT: "#F5F7FA",
          soft: "#FFFFFF",
          softer: "#ECEFF4",
          line: "#DCE1E9",
        },
        accent: {
          DEFAULT: "#E3A008",
          light: "#F5C451",
          dark: "#B67D02",
        },
        teal: {
          DEFAULT: "#4FD1C5",
        },
        ink2: "#8A93A6",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(227,160,8,0.15), 0 8px 30px -8px rgba(227,160,8,0.25)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
