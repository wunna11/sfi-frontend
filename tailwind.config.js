/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#025393',
        secondary: '#09A9DB',
        white: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          150: '#F4F8FB'
        },
        black: {
          50: '#3C3C3C',
          100: '#212121',
          200: '#000000'
        },
        gray: {
          50: '#696969',
          100: '#808080',
          150: '#E3ECF3',
          200: '#A9A9A9',
          300: '#B8B8B8',
          400: '#C0C0C0',
          500: '#E4E4E4',
          600: '#D1D3D9',
          700: '#A3B8C8',
          800: '#CCCCCC',
          850: '#696969',
          900: '#898585'
        },
        red: {
          50: '#DE0909',
          100: '#BE1E21',
          150: '#F30023'
        },
        blue: {
          50: '#007AFF',
          100: '#025393',
          150: '#2F80ED',
          200: '#025394',
          300: '#0053AB'
        },
        green: {
          50: '#38B551',
          100: '#0096A9'
        },
        yellow: {
          50: '#FFC000',
          100: '#F4C63B'
        },
        pastel: '#C1E4FF'
      }
    }
  },
  plugins: []
}
