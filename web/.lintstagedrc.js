const path = require('path');

// eslint
const fixLintErrors = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

// prettier
const reformatting = (filenames) =>
  `prettier ${filenames.map((f) => path.relative(process.cwd(), f))} --write`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [fixLintErrors, reformatting],
};
