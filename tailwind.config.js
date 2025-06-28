/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        supermercado: ['Supermercado', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial' : "radial-gradient(50% 50% at 50% 50% ), rgba(253, 255, 80, 0.5)0% , rgba(217, 217, 217, 0) 100% "
      }
    },
  },
  plugins: [],
};