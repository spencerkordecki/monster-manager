module.exports = {
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': 0,
    'no-console': 0,
    'consistent-return': 0,
    'react/no-access-state-in-setstate': 0,
    'react/prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/no-unused-state': 0,
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0
  }
};