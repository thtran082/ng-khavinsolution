const full = require("./tailwind-full.config");
const typography = require('./src/styles/tailwind-typography.config');

module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      ...full,
      ...typography,
    },
  },
  plugins: [],
}
