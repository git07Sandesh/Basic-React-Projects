/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Tailwind will scan all your files
    theme: {
      extend: {
        colors: {
          'crimson-red': '#E60012', // Custom color for crimson red
          'dark-blue': '#003B5C',   // Custom color for dark blue
          'muted-gold': '#F7C600',  // Custom color for muted gold
          'soft-gray': '#F0F0F0',   // Custom color for soft gray
        },
      },
    },
    plugins: [],
  }
  