// eslint.config.mjs

import { FlatCompat } from '@eslint/eslintrc';


const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
];

export default eslintConfig;
