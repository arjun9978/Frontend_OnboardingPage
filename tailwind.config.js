/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f2ff',
          100: '#bae0ff',
          200: '#7cc1ff',
          300: '#3b99ff',
          400: '#0066ff',
          500: '#004fcc',
          600: '#003999',
          700: '#002966',
          800: '#001933',
          900: '#000a1a',
        },
        secondary: {
          50: '#ffe4e6',
          100: '#fdb8c0',
          200: '#fb8fa1',
          300: '#f56682',
          400: '#f23d63',
          500: '#d6314d',
          600: '#a42a3a',
          700: '#752024',
          800: '#4b1617',
          900: '#2c0d0d',
        },
        accent: '#fbbf24', // amber-400
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [forms, typography],
};
