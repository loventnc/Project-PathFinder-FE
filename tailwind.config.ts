import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#0077B6",
        "primary01": "#56A6E9",
        "primary03": "#C3FFFF",
        "secondary01": "#E6F2FF",
        "secondary02": "#DCE8F5",
        "secondary03": "#B4BFCC",
        "accent01": "#00B4D8",
        "accent02": "#005777",
        "neutral01": "#FFFFFF",
        "neutral02": "#F2F2F2",
        "neutral03": "#CCCCCC",
        "neutral04": "#999999",
        "neutral05": "#4D4D4D",
        "neutral06": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
