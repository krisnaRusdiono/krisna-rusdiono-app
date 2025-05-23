import type { Config } from "tailwindcss";

const config: Config = {
  // important: '#__next',
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      height: {
        'fill-available': '-webkit-fill-available',
      },
    },
  },
  plugins: [],
};
export default config;
