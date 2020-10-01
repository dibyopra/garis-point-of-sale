module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src/'],
        alias: {
          '@product': './src/modules/product',
          '@transaction': './src/modules/transaction',
          '@voucher': './src/modules/voucher',
          '@financial_statements': './src/modules/financial_statements',
          '@authentication': './src/modules/authentication',
          '@dashboard': './src/modules/dashboard',
          '@core': './src/core',
          '@assets': './src/assets',
          '@app': './src',
        },
      },
    ],
  ],
};