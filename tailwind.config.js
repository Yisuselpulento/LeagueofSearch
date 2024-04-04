/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#070720',
        secundary: '#1e1b4b'
      },
      backgroundImage: {
        'hero-pattern': "url('/images/kaynwallpaper.webp')",
        'hero-movile': "url('/images/kaynMovile.webp')"

      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })

  ]
}
