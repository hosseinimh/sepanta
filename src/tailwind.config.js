/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        IRANSansWeb: ["IRANSansWeb"],
        IRANSansWeb_FaNum: ["IRANSansWeb_FaNum"],
        ficon: ["ficon"],
      },
      backgroundImage: {
        loginBg: "url('./images/login-bg.png')",
        loginWomen: "url('./images/women-left.png')",
      },
      colors: {
        mainBgColor: "#F9FBFD",
        navBgColor: "#373759",
        sectionBgColor: "#EEF2FA",
        btnPrimaryColor: "#6788FF",
        btnSecondaryColor: "#FF9391",
        primaryColor: "#A4A4A4",
        secondaryColor: "#1f4caf",
        warningColor: "#F5C451",
        mainBgColorDark: "#212227",
        navBgColorDark: "#1B1C21",
        borderColorDark: "#313131",
        primaryColorDark: "#636363",
        secondaryColorDark: "#1f4caf",
        warningColorDark: "#1f4caf",
      },
      keyframes: {
        leftAnimate: {
          "0%": { transform: "translateX(-200%)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0)" },
        },
        rightAnimate: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0)" },
        },
        topAnimate: {
          "0%": { transform: "translateY(-200%)" },
          "50%": { transform: "translateY(10%)" },
          "100%": { transform: "translateX(0)" },
        },
        bottomAnimate: {
          "0%": { transform: "translateY(200%)" },
          "50%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        leftAnimate: "leftAnimate 2s ease-in-out ",
        rightAnimate: "rightAnimate 2s ease-in-out ",
        topAnimate: "topAnimate 2s ease-in-out ",
        bottomAnimate: "bottomAnimate 2s ease-in-out ",
      },
    },
  },
  plugins: [],
}

