/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#080C11',
          card: '#101721',
          surface: '#17202D',
          muted: '#253245',
          orange: '#FF5A1F',
          orangeHover: '#E44A12',
          gold: '#F59E0B',
          goldLight: '#FDE68A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(8,12,17,0.75) 0%, rgba(8,12,17,0.4) 50%, rgba(8,12,17,0.95) 100%)',
      }
    },
  },
  plugins: [],
}
