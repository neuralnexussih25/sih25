/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepMaroon: "#4B000F",
        heritageGold: "#FFD700",
        parchment: "#F5F1E7",
      },
      backgroundImage: {
        "heritage-pattern": "url('/src/assets/pattern.jpg')",
      },
      backgroundSize: {
        '50': '50px',
        '100': '100px',
        '150': '150px',
        '200': '200px',
        'custom': '150px 150px', // custom square tile
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
