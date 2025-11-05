import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        arial: ['var(--font-arial)', 'sans-serif'],
      },
      colors: {
        primary: '#3bb77e',
        accent: '#f53e32',
      },
      borderRadius: {
        '[10px]': '10px',
        '[4px]': '4px',
      },
    },
  },
  plugins: [],
}

export default config
