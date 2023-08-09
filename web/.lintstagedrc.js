const path = require('path');

// eslint
const fixLintErrors = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

// prettier
const reformatting = (filenames) =>
  `prettier ${filenames.map((f) => path.relative(process.cwd(), f))} --write`;

// typescript check
const typeCheck = (_) => `npm run check-types`;

module.exports = {
  '*.{ts,tsx}': [typeCheck],
  '*.{js,jsx,ts,tsx}': [fixLintErrors, reformatting],
};
