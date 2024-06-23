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
        gray: {
          100: "#F2F2F2",
          200: "#9D9DA3",

          300: "#FFFFFFCC",
          400: "#9E9FA3",
          500: "#FFFFFFB2",
          600: "#171717",
        },
        dark: {
          200: "#7E7E82",
          300: "#25282A",
          400: "#272729",
          500: "#17171A",
          600: "#09090A",
          700: "#000000",
        },
        red: {
          500: "#E03C31",
        },
      },
      fontSize: {
        sm: [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "-0.14px",
            fontWeight: "400",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.14px",
          },
        ],
        "2xl": [
          "26px",
          {
            lineHeight: "34px",
            letterSpacing: "-0.46px",
          },
        ],
        "4xl": [
          "56px",
          {
            lineHeight: "67px",
            letterSpacing: "-0.72px",
          },
        ],
      },
    },
  },
  plugins: [],
};
