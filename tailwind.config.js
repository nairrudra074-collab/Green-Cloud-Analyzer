module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5fdf9',
          100: '#e6fbf0',
          500: '#06B6A4',
          700: '#0F766E'
        },
        leaf: {
          500: '#10B981'
        },
        amber: {
          500: '#F59E0B'
        },
        brand: {
          dark: '#0F172A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif']
      },
      boxShadow: {
        'soft': '0 6px 18px rgba(14, 22, 40, 0.06)',
        'md-strong': '0 10px 30px rgba(14,22,40,0.08)'
      },
      borderRadius: {
        'lg': '14px'
      }
    }
  },
  plugins: []
};