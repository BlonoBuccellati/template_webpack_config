const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  merge,
} = require('webpack-merge');
const commonConf = require('./webpack.common');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () =>
  merge(
    commonConf({
      outputFile,
      assetFile,
    }),
    {
      mode: 'development',
      devtool: 'source-map',
      devServer: {
        open: true,
        static: {
          directory: path.resolve(
            __dirname,
            'public'
          ),
        },
      },
      watchOptions: {
        ignored: /node_modules/,
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body', //bodyの方が性能が上がる。//分割
        }),
      ],
    }
  );
