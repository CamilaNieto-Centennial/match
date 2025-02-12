/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
    "./public/components/**/*.html",
    "node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary10: "var(--primary10)",
        primary20: "var(--primary20)",
        primary30: "var(--primary30)",
        secondary: "var(--secondary)",
        secondary10: "var(--secondary10)",
        neutral: "var(--neutral)",
        neutral10: "var(--neutral10)",
        tertiary: "var(--tertiary)",
        onPrimary: "var(--onPrimary)",
        onPrimary10: "var(--onPrimary10)",
        onMuted: "var(--onMuted)",
      },
    },
  },
  plugins: [],
}

