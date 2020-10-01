module.exports = {
  root: true,
  extends: ['@react-native-community', 'react-native-wcandillon'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-null'],
  rules: {
    'no-null/no-null': ['error'],
    'import/no-unresolved': [
      'error',
      {
        ignore: [
          '@app',
          '@core',
          '@assets',
          '@authentication',
          '@dashboard',
          '@financial_statements',
          '@voucher',
          '@transaction',
          '@product',
        ],
      },
    ], // ignore module import
    'react/jsx-closing-bracket-location': 'off', // let prettier formats the code
  },
};
