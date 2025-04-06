/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveDot: 'moveDot 6s linear infinite',
      },
      keyframes: {
        moveDot: {
          '0%, 100%': { top: '10%', right: '10%' },
          '25%': { top: '10%', right: 'calc(100% - 35px)' },
          '50%': { top: 'calc(100% - 30px)', right: 'calc(100% - 35px)' },
          '75%': { top: 'calc(100% - 30px)', right: '10%' },
        },
      },
    },
  },
  plugins: [],
}