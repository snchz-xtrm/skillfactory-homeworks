module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'max-len': [
      'off', { 'code': 80 },
    ],
    'object-curly-spacing': [
      'error', 'always',
    ],
    'require-jsdoc': 0,
    'no-unused-vars': 1,
    'block-spacing': 0,
  },
};
