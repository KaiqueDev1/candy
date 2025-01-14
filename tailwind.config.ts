/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212529",
        primary: "rgb(242,116,149)",
        secundary: "#2b3035",
        third: "#6c757d",
        fourth: "#adb5bd",
        text: "#ffffff",
        shadow: "rgba(0, 0, 0, 0.6)",
        shadow2: "rgba(0, 0, 0, 0.4)",
        whatsapp: "#204F46",
        instagram: "#C13584",
      },
      fontFamily: {
        inter: ["var(--font-roboto)"],
        playwrite: ["var(--font-playwrite)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
