import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
          600: "#76828D",
          700: "#ABB8C4",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
