module.exports = {
  root: true,
  env: {
    // browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'standard'
  ],
  globals: {
  },
  plugins: [
  ],
  rules: {
    'no-unused-vars': 1,
    'no-new': 0
  }
}
