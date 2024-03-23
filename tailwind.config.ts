import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      fontSize: {
        '60px': [
          '3.75rem',
          {
            lineHeight: '4.125rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '50px': [
          '3.125rem',
          {
            lineHeight: '2.8125rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '30px': [
          '1.875rem',
          {
            lineHeight: '2.175rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '24px': [
          '1.5rem',
          {
            lineHeight: '1.7375rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '20px': [
          '1.25rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '20px-leading': [
          '1.25rem',
          {
            lineHeight: '1.625rem',
            letterSpacing: '-0.0125rem',
          },
        ],
        '15px': [
          '0.9375rem',
          {
            lineHeight: '1.0875rem',
            letterSpacing: '-0.0125rem',
          },
        ],
      },
      textColor: {
        gray: '#555555',
      },
      backgroundColor: {
        'dark-yellow': '#e8e80e',
      },
    },
  },
  plugins: [],
};
export default config;
