const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: process.cwd(),
  entry: {
    index: './src/index.tsx',
  },
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), new WebpackManifestPlugin()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: {
                namedExport: true,
              },
            },
          },
          'css-modules-typescript-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
              // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
              // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        // asset
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // asset
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    pathinfo: false,
    publicPath: '/',
  },
};
