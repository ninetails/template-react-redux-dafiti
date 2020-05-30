module.exports = {
  '*.{js,jsx,mjs}': [
    'prettier --write',
    'eslint --cache --fix',
    'eslint --cache'
  ],
  '*.{css,html,json,md,scss,svg,yaml,yml}': ['prettier --write']
}
