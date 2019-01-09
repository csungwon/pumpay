module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'jest'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed']
  },
  env: {
    browser: true,
    jest: true
  },
  parser: 'babel-eslint'
};
