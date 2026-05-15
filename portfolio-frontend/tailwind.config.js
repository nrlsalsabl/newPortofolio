/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        navy: '#07102b',
      },
      boxShadow: {
        glow: '0 25px 80px rgba(56, 189, 248, 0.12)',
      },
    },
  },
  plugins: [],
}

