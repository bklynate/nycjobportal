module.exports = {
  '**/*.(js|jsx)': [
    'npm run lint',
    'jest --bail --findRelatedTests',
    'prettier --write',
    'git add',
  ],
};
