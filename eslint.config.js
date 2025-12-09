import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  { ignores: ['dist/'] },
  js.configs.recommended,

  // Node environment config for all JS files except tests
  {
    files: ['**/*.js'],
    ignores: ['**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // <--- applies console, process, global, etc.
      },
    },
    rules: {
      'no-console': 'off',
    },
  },

  // Jest environment config only for test files
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    plugins: { jest: jestPlugin },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...jestPlugin.environments.globals.globals,
      },
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  },

  prettierConfig,
];
