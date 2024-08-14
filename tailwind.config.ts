import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: `selector`,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'headingl': '64px',
        'headingm': '24px',
        'headings': '20px',
        'bodym': '18px',
        'bodys': '14px' 
      },
      colors: {
        'main_purple': '#A445ED',
        'main_lightgray': '#E9E9E9',
        'main_gray': '#757575'
      }

    },
  },
  plugins: [],
};
export default config;
