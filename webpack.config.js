const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  devtool:
    'hidden-nosources-source-map',
  entry: {
    app: './src/app.js',
    sub: './src/sub.js',
  },
  output: {
    path: path.resolve(
      __dirname,
      'public'
    ),
    filename: '[name].[chunkhash].js',
    clean: {
      keep: /\.html/,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
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
          filename:
            'images/[contenthash][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:
        '[name].[chunkhash].css',
      chunkFilename:
        '[name].[chunkhash].css',
    }),
  ],
};
