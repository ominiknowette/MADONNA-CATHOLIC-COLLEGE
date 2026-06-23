import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mcc: {
          ink: "#2B1631",
          plum: "#6F0F2A",
          wine: "#801431",
          rose: "#D85A8A",
          pink: "#F8E8EE",
          blush: "#FFF7FA",
          paper: "#FFFFFF",
          muted: "#7A6B80",
          line: "#E8B8C6",
        },
      },
      boxShadow: {
        card: "0 18px 45px rgba(128, 20, 49, 0.10)",
        soft: "0 10px 30px rgba(128, 20, 49, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "serif"],
      },
      backgroundImage: {
        "blush-radial":
          "radial-gradient(circle at top right, rgba(249,238,243,.75), transparent 34%), radial-gradient(circle at bottom left, rgba(216,90,138,.12), transparent 36%)",
      },
    },
  },
  plugins: [],
};

export default config;
