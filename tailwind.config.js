module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'pyusd-blue': '#2962FF',
        'pyusd-green': '#00C853',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}