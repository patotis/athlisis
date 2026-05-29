import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eff6ff",
          100: "#dbeafe",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          900: "#1e3a5f",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.03)",
          2: "rgba(255,255,255,0.06)",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #3b82f6, #6366f1)",
        "gradient-dark": "linear-gradient(135deg, #080c14, #0d1220)",
      },
    },
  },
  plugins: [],
};

export default config;
