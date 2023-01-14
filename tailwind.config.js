module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_501: "#909090",
        gray_300_7f: "#e5e1de7f",
        gray_700: "#646363",
        gray_500: "#929292",
        black_900: "#000000",
        bluegray_400: "#8b8b8b",
        gray_900: "#232728",
        bluegray_100: "#d9d9d9",
        deep_purple_A200: "#9747ff",
        gray_200: "#ececec",
        white_A700: "#ffffff",
        gray_300: "#dfdfdf",
      },
      fontFamily: { inter: "Inter" },
      borderRadius: {
        radius5: "5px",
        radius05: "0.5px",
        radius15: "15px",
        radius17: "17px",
        radius20: "20px",
        radius50: "50%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
