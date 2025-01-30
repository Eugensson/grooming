import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        blue: {
          DEFAULT: "#000958",
          secondary: "#67698b",
        },
        orange: {
          DEFAULT: "#ff4917",
          secondary: "#ffce9d",
          tertiary: "#fff0e1",
          quaternary: "#fffaf5",
          hover: "#fb3d08",
        },
        yellow: {
          DEFAULT: "#ffda54",
          secondary: "#fff3d2",
        },
        white: "#ffffff",
        pink: "pink",
        transparent: "transparent",
      },
      fontFamily: {
        primary: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        triangle: "url('/images/triangle.svg')",
      },
      boxShadow: {
        primary: "0px 4px 40px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
} satisfies Config;
