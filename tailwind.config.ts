import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        'guros-dark': '#273138',
        'guros-gray': '#5C7284',
        'guros-purple': '#4C42E4',
        'guros-green': '#00DA4A',
        'guros-gray-950': '#273138',
        'white': '#ffffff',
      },
      width: {
        '357px': '357px',
      },
      height: {
        '57px': '57px',
      },
      padding: {
        '19px': '19px',
        '24px': '24px',
      },
      gap: {
        '4px': '4px',
      },
      borderRadius: {
        '8px': '8px',
      },
      boxShadow: {
        'custom': '4px 4px 16px 0px #201C6114',
      },
      borderWidth: {
        '6px': '6px',
      },
      backgroundColor: {
        'guros-pink': '#E5004D',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;