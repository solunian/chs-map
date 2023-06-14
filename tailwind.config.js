/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      "sans": ["Josefin Sans", "sans-serif"],
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(1deg)' },
          '20%, 40%, 60%, 80%': { transform: 'rotate(-1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.4s linear',
      },
    },
  },
  plugins: [],
}

