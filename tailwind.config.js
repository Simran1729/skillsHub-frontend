/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage : {
      //   'green-gradient': 'radial-gradient(circle, green 0%, transparent 100%)',
      // },
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors : {
        'my-green' : '#00FF84',
        'my-blue' : '#3722D3',
        'my-dark-blue' : '#002333'
      }
    },
  },
  plugins: [],
}