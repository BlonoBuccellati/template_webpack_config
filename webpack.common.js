const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  ProvidePlugin,
} = require('webpack');

const path = require('path');
module.exports = ({
  outputFile,
  assetFile,
}) => ({
  entry: {
    app: './src/app.js',
    sub: './src/sub.js',
  },
  output: {
    path: path.resolve(
      __dirname,
      'public'
    ),
    filename: `${outputFile}.js`,
    clean: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true, //自動修正してくれる。
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: `images/${assetFile}.[ext]`,
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`,
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),
  ],
});
