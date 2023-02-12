/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'windows-bg': '#008080',
            'taskbar': '#c3c3c3',
            'title-bar': '#00008B',
            'shadow': '#818181'
        },
        fontFamily: {
          'sans': ['W95']
        }
      },
    },
    plugins: [],
  }