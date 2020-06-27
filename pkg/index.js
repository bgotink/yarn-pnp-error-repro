exports.configs = {
  base: {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',

      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
  }
}
