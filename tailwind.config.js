// /** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["*", "./pages/*html"],
  content: ["*"],
  theme: {
    screens: {
      xs: "320px",
      sm: "375px",
      lsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "40px",
        "2xl": "60px",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0E2341",
        secondary: "#E78DD2",
        tertiary: "#F1F3F8",
        success: "#3789FF",
        accent: "#ECF1F4",
        light: "#FAFCFE",
        gray: "#6D737A",
        disable:"#637381"
      },
      backgroundImage: {
        "instructor-bg": "url('/assets/images/instructor/instructor.webp')",
        "about-bg": "url('/assets/images/about/about-bg.png')",
      },
    },
  },
  plugins: [],
};
