/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F5F1',
        ink: '#14161A',
        muted: '#585D64',
        hairline: '#E1DFD7',
        accent: {
          DEFAULT: '#15395B',
          hover: '#0F2C47',
          deep: '#0C233C',
          soft: '#E9EFF5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(21, 30, 40, 0.05), 0 12px 32px -12px rgba(21, 30, 40, 0.10)',
        lift: '0 2px 4px rgba(21, 30, 40, 0.04), 0 26px 56px -24px rgba(21, 30, 40, 0.22)',
      },
      maxWidth: {
        '5xl': '64rem',
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
}