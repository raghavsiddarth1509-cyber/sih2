/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Faithful color system from previous website (sih-hna1.vercel.app)
        background: '#f8f9ff',
        surface: '#f8f9ff',
        'surface-bright': '#f8f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#eff4ff',
        'surface-container': '#e5eeff',
        'surface-container-high': '#dce9ff',
        'surface-container-highest': '#d3e4fe',
        'surface-variant': '#d3e4fe',
        'surface-dim': '#cbdbf5',
        primary: '#000f22',
        'primary-container': '#0a2540',
        'on-primary': '#ffffff',
        'on-primary-container': '#768dad',
        'primary-fixed': '#d2e4ff',
        'primary-fixed-dim': '#b0c8eb',
        secondary: '#9d4300',
        'secondary-container': '#fd761a',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5c2400',
        'secondary-fixed': '#ffdbca',
        'secondary-fixed-dim': '#ffb690',
        tertiary: '#001209',
        'tertiary-container': '#002a1a',
        'tertiary-fixed': '#6ffbbe',
        'tertiary-fixed-dim': '#4edea3',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#43474d',
        outline: '#74777e',
        'outline-variant': '#c4c6ce',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',

        // Brand aliases for backward compatibility
        brand: {
          bg: '#f8f9ff',
          cardBg: '#ffffff',
          border: '#e5eeff',
          primaryDark: '#000f22',
          gold: '#fd761a',
          goldLight: '#ffdbca',
          rust: '#9d4300',
          rustLight: '#ffeddf',
          navy: '#0a2540',
          navySurface: '#000f22',
          tealBadge: '#e5eeff',
          tealText: '#000f22',
          cream: '#eff4ff',
          ivory: '#f8f9ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        headline: ['Outfit', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        title: ['Outfit', 'Inter', 'sans-serif'],
        heritage: ['Outfit', 'Inter', 'sans-serif'], // Remaps heritage headings directly to Outfit
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(10,37,64,0.05)',
        '2xs': '0 1px 3px 0 rgba(10,37,64,0.04), 0 1px 2px -1px rgba(10,37,64,0.04)',
        'portal': '0 1px 8px rgba(10,37,64,0.04)',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      }
    },
  },
  plugins: [],
}
