module.exports = {
  important: true,
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem'
      },
    },
    variants: {
      opacity: ({ after }) => after(['disabled'])
    },
  },
  plugins: [],
}
