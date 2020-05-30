module.exports = {
  extends: ['react-app', 'standard', 'standard-react'],
  plugins: ['react-hooks'],
  rules: {
    // react-hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // custom rules
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'import/newline-after-import': 'error',
    'import/order': 'error',
    'jsx-quotes': ['error', 'prefer-double']
  }
}
