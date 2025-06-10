import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { parserOptions: { ecmaVersion: 2020 } },
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ),
];

export default eslintConfig;
