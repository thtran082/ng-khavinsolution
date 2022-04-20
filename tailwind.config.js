const full = require("./tailwind-full.config");

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      ...full,
    },
  },
  plugins: [],
}
