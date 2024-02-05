module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
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
    'linebreak-style': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
