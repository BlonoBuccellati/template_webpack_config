const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const {
  merge,
} = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name].[chunkhash]';
const assetFile = '[contenthash]';

module.exports = () =>
  merge(
    commonConf({
      outputFile,
      assetFile,
    }),
    {
      devtool: false,
      mode: 'production',
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body', //bodyの方が性能が上がる。//分割
          minify: {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },
        }),
      ],
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin(),
          new CssMinimizer(),
        ],
      },
    }
  );
