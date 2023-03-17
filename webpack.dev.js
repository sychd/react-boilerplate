/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const DotenvPlugin = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 3000,
    historyApiFallback: true, // makes SPA Router workable (https://ui.dev/react-router-cannot-get-url-refresh)
  },
  plugins: [new MiniCssExtractPlugin(), new DotenvPlugin({ path: '.env.dev' })],
});
