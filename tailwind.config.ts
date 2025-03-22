/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F0F3FF",
        primary: "rgb(242,116,149)",
        secundary: "#EFEFEF",
        third: "#6c757d",
        fourth: "#adb5bd",
        text: "#212529",
        shadow: "rgba(0, 0, 0, 0.6)",
        shadow2: "rgba(0, 0, 0, 0.4)",
        whatsapp: "#25d366",
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
