const globals = require('globals');
const pluginJs = require('@eslint/js');
const stylisticJs = require('@stylistic/eslint-plugin-js');

module.exports = [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
    rules: {
      '@stylistic/js/quotes': ['error', 'single'],
      // '@stylistic/js/max-len': ['error', { code: 80 }],
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
