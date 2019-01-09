module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'jest'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed']
  },
  env: {
    jest: true
  },
  parser: 'babel-eslint'
};
