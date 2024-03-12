/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      colors: {
        onSecondary: "#F1FEF2",
        onSecondaryContainer: "#B8D8C7",
        tertiary: "#6F697E",
        onTertiary: "#F7F6F9",
        tertiaryContainer: "#F9F8FA",
        background: "#FCFCFD",
        border: "#F2F0F4",
        primary: { DEFAULT: "#7444EE", dark: "#5F2BDC", light: "#6F4BEF", text: "#1A0E36", hover: "#6126f7" },
        secondary: "#10A821",
      },
      animation: {
        slidein: "slidein 0.3s ease-in-out",
      },
      keyframes: {
        slidein: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
