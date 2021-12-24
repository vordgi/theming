const path = require('path');

module.exports = {
  root: true,
  extends: [
    "plugin:@next/next/recommended",
    "../eslint/.eslintrc.json"
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: [path.join(__dirname, './tsconfig.json')]
      }
    }
  ]
}
