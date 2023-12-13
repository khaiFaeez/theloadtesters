/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#002254",
        "base-1": "#cfcfcf",
        "base-2": "#ffffff",
      },
    },
  },
  plugins: [],
};
