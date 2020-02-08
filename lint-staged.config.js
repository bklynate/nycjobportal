module.exports = {
  '**/*.+(js|jsx)': ['npm run lint', 'prettier --write', 'git add'],
};
