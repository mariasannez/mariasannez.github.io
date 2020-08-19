const StyleLintPlugin = require('stylelint-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devtool: 'source-map',
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'scss',
      files: ['**/*.scss', '**/**/*.scss', '**/**/**/*.scss', '**/**/**/**/*.scss'],
      failOnError: false,
      quiet: false,
      fix: true,
      syntax: 'scss'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000
    })
  ]
});