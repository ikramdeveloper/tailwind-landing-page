module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#5267df",
        "custom-red": "#fa5959",
        "custom-blue": "#242a45",
        "custom-gray": "#9194a2",
        "custom-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px",
    },
  },
  plugins: [],
};
