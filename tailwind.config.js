/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pharmacy: {
          orange: '#FF6A00',
          'orange-hover': '#E55E00',
          'orange-dark': '#C94F00',
          'orange-light': '#FFF3EB',
          'orange-subtle': '#FFF8F4',
          'orange-border': '#FED7AA',
          teal: '#00A896',
          'teal-dark': '#008375',
          'teal-light': '#E6F6F4',
          charcoal: '#1A1D20',
          'charcoal-light': '#2D3139',
          muted: '#667085',
          cream: '#FAF8F5',
          'cream-dark': '#F0ECE4',
          card: '#FFFFFF',
          border: '#EBE7DF',
        }
      },
      fontFamily: {
        alexandria: ['Alexandria', 'Somar', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 8px 30px -4px rgba(255, 106, 0, 0.07), 0 2px 8px -2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 35px -8px rgba(255, 106, 0, 0.15), 0 6px 16px -4px rgba(0, 0, 0, 0.06)',
        'glow-orange': '0 10px 25px -5px rgba(255, 106, 0, 0.35)',
        'drawer': '-10px 0 40px -5px rgba(0, 0, 0, 0.15)',
        'sheet': '0 -10px 40px -8px rgba(0, 0, 0, 0.18)',
      }
    },
  },
  plugins: [],
}