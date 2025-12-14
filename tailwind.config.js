/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0B1C26', // Deep Blue
          800: '#112530', // Lighter Deep Blue
          700: '#172e3b', // Card bg
          600: '#233d4d', // Lighter
        },
        neon: {
          cyan: '#F2A341',    // Renaming tokens is risky, so we map new colors to old semantic slots for now
          purple: '#F26849',  // or we could refactor. Let's map for minimal disruption first.
          magenta: '#BF5239',
          bronze: '#8C6620',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0B1C26, #112530)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        }
      }
    },
  },
  plugins: [],
}
