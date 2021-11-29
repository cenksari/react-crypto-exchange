module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: 'error',
    'no-console': 'warn',
    'no-undef': 'error',
    'no-unused-vars': 'error',
    'no-use-before-define': 'error',
    'newline-before-return': 'error',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
  },
};
