/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Enable dark mode using the class strategy
  theme: {
    extend: {
      colors: {
        'electric-blue': '#007bff', // Placeholder - adjust as needed
        'burnt-orange': '#cc5500', // Placeholder - adjust as needed
        'muted-gray': '#6c757d',   // Placeholder - adjust as needed
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'], // Add Space Mono for headings
        sans: ['Inter', 'sans-serif'],      // Add Inter for body text
      },
    },
  },
  plugins: [],
}
