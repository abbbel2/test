module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'check-start': 'hsl(192, 100%, 67%)',
        'check-end': 'hsl(280, 87%, 65%)',
      },
      fontFamily: {
        body: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'mobile-dark': "url('/bg-mobile-dark.jpg')",
        'desktop-dark': "url('/bg-desktop-dark.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
