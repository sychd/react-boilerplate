module.exports = {
  env: {
    node: true, // require, __dirname, etc.
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'jsx-a11y', 'prettier', 'jest', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-curly-brace-presence': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/self-closing-comp': 'error',
    'import/no-default-export': 'error',
    'import/order': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Please, try to use absolute import instead',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.{tsx,jsx}'],
      rules: {
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
