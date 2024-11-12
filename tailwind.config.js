/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        green: "#1F482C",
        saddle50: "#F8F5EE",
        saddle100: "#EEE7D333",
        saddle900: "#4E3227",
      },
    },
  },
  plugins: [],
};
