import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ced4da",
        primary: "rgb(242,116,149)",
        secundary: "rgb(191,210,228)",
        text: "rgba(0, 0, 0, 0.87)",
        shadow: "rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
