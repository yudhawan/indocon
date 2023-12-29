import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        yellowMain:'#FBB83B',
        yellowMain2:'#fbaf23',
        blackMain:'#101626',
        redMain:'#D62424',
        blueMain:'#0EA5E9',
        grayMain:'#9ca3af',
        grayMain2:'#d1d5db',
        
      },
    },
  },
  plugins: [],
}
export default config
