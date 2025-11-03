/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(240, 15%, 8%)',
        foreground: 'hsl(0, 0%, 95%)',
        accent: 'hsl(140, 85%, 55%)',
        primary: 'hsl(260, 95%, 65%)',
        surface: 'hsl(240, 12%, 12%)',
        'risk-low': 'hsl(140, 70%, 50%)',
        'risk-medium': 'hsl(45, 90%, 55%)',
        'risk-high': 'hsl(0, 85%, 60%)',
        'text-muted': 'hsl(0, 0%, 60%)',
        'momentum-hot': 'hsl(25, 100%, 60%)',
        border: 'hsl(240, 12%, 16%)',
        card: 'hsl(240, 12%, 12%)',
        muted: 'hsl(240, 12%, 20%)',
      },
      borderRadius: {
        'lg': '16px',
        'md': '10px',
        'sm': '6px',
      },
      boxShadow: {
        'card': '0 8px 24px hsla(260, 50%, 10%, 0.4)',
        'glow': '0 0 20px hsla(260, 95%, 65%, 0.3)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}