module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
    'pre-push': 'cross-env CI=true react-scripts test --all'
  }
}
