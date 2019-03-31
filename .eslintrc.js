module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'comma-dangle': 'error',
    'no-plusplus': 'off',
    'no-param-reassign': ['error', { 'props': false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
}
