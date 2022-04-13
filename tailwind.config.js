module.exports = {
  prefix: "tw-",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./layout/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
    "./fallback/**/*.{ts. tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
