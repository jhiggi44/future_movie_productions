module.exports = {
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      margin: {
        jtron: "-8rem",
      },
      height: {
        jtron: "calc(100vh - 80px)",
      },
      maxHeight: {
        laurel: "120px",
        "laurel-sm": "88px"
      },
      minHeight: {
        jtron: "800px",
      },
      maxWidth: {
        card: "468px",
      },
    },
  },
  variants: {},
  plugins: [],
}
