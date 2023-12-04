const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "brand-patter": "linear-gradient(60deg, rgb(193, 20, 23), #e53935)",
      },
      backgroundPosition: {
        rtl: "100% 0",
      },
      colors: {
        layout: "#f1f1f1",
        darklayout: "rgb(71, 77, 87)",
        boxdark: "rgb(24, 26, 32)",
        strokedark: "rgb(71, 77, 87)",
        brandBlue: "#0285cb",
        textdark: "#cfcfcf",
      },
      boxShadow: {
        sidebar:
          "0 16px 38px -12px rgba(0,0,0,.56), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
});
