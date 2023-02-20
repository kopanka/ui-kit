import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import imprt from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import hooks from 'eslint-plugin-react-hooks'
import jest from 'eslint-plugin-jest'
import prettier from 'eslint-config-prettier'

// eslint-disable-next-line import/no-default-export
export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    ignores: ['.storybook/**/*'],
    plugins: {
      import: imprt,
      react,
      'jsx-a11y': jsxA11y,
      'react-hooks': hooks,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...hooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...prettier.rules,
      semi: ['error', 'never'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-restricted-imports': ['error', { patterns: ['*.spec', '*.test'] }],
      eqeqeq: ['error', 'smart'],
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-else-return': ['error', { allowElseIf: true }],
      'no-implicit-coercion': ['error', { boolean: false }],
      'no-implicit-globals': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': ['error', { object: true, array: false }],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      'no-undef': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'object-curly-spacing': ['error', 'always'],
      'no-multi-spaces': ['error', { ignoreEOLComments: true }],
      'no-trailing-spaces': ['error', { skipBlankLines: true }],
      'no-whitespace-before-property': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      'space-in-parens': ['error', 'never'],
      'space-infix-ops': 'error',
      'space-unary-ops': ['error', { words: true, nonwords: false }],
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',

      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/no-duplicates': 'error',
      'import/group-exports': 'error',

      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
      'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
      'react/jsx-max-depth': ['error', { max: 8 }],
      'react/jsx-key': 'error',
      'react/prop-types': 'off',
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandLast: true,
          noSortAlphabetically: true,
          reservedFirst: true,
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          modules: true,
        },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      ts,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs['recommended'].rules,
      'ts/consistent-type-imports': 'warn',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.spec.json',
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.stories.jsx', '**/*.stories.tsx'],
    rules: {
      'import/group-exports': 'off',
    },
  },
]
