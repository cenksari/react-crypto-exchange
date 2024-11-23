import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import hooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': hooksPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,
      'no-console': 'warn',
      'react/prop-types': 'off',
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': ['error', { args: 'none' }],
      'jsx-a11y/label-has-associated-control': 'off',
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    },
  },
];
