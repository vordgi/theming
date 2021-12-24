const path = require('path');

module.exports = {
  "root": true,
  "extends": [
    "../eslint/.eslintrc.json"
  ],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": [path.join(__dirname, './tsconfig.json')]
      }
    }
  ]
}
