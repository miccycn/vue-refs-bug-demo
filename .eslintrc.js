module.exports = {
  root: true,
  env: {
    "browser": true
  },
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    'prefer-arrow-callback': 0,
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'func-names': 0,
    'no-alert': 0,
    'no-bitwise': 0,
    'no-console': 0,
    'no-lonely-if': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'object-shorthand': 0,
    'prefer-template': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'global-require':0,
    'no-unused-vars': 1,
    'no-mixed-operators': 0,
    'linebreak-style': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
