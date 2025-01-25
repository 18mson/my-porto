import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',        
      'dist/**',         
      'build/**',        
      'some-module/**',
      'tailwind.config.ts',
    ],
    rules: {
      '@next/next/no-img-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'args': 'after-used',
          'argsIgnorePattern': '^_',
          'ignoreRestSiblings': true,
          'vars': 'all',
          'varsIgnorePattern': '^_'
        }
      ],
      'eqeqeq': [2, 'always'],
      'import/no-unresolved': [2, { 'ignore': ['swiper']}],
      'indent': [2, 2, { 'SwitchCase': 1 }],
      'jsx-quotes': 2,
      'max-len': [2, { 'code': 100, 'ignoreStrings': true }],
      'max-lines': [2, { 'max': 300, 'skipBlankLines': true, 'skipComments': true }],
      'no-console': 2,
      'no-debugger': 2,
      'no-nested-ternary': 1,
      'no-unneeded-ternary': 1,
      'no-unused-vars': 'off',
      'no-var': 2,
      'object-curly-spacing': [2, 'always', { 'arraysInObjects': false }],
      'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
      'react/default-props-match-prop-types': 2,
      'react/display-name': 0,
      'react/forbid-prop-types': [2, { 'forbid': ['any']}],
      'react/jsx-curly-spacing': 2,
      'react/jsx-key': 2,
      'react/jsx-max-depth': [2, { 'max': 5 }],
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-pascal-case': 2,
      'react/jsx-sort-props': [2, { 'ignoreCase': true }],
      'react/jsx-uses-react': 2,
      'react/jsx-uses-vars': 2,
      'react/jsx-wrap-multilines': 2,
      'react/no-danger': 2,
      'react/no-did-mount-set-state': 2,
      'react/no-direct-mutation-state': 2,
      'react/no-multi-comp': 0,
      'react/no-unknown-property': 2,
      'react/no-unused-state': 2,
      'react/prefer-es6-class': 2,
      'react/prop-types': 2,
      'react/self-closing-comp': 2,
      'react/sort-comp': 2,
      'react/sort-default-props': [2, { 'ignoreCase': true }],
      'react/sort-prop-types': [2, { 'ignoreCase': true }],
      'semi': [2, 'always'],
      'sort-keys': [2, 'asc', { 'caseSensitive': false, 'natural': false }],
    },
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
