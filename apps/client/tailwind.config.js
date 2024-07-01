/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-reverse': 'spin 1s linear infinite reverse',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),

  ],
}

