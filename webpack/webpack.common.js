const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

module.exports = {
  context: process.cwd(),
  entry: './src/index.tsx',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': dotenv.parsed,
    }),
  ],
  module: {
    rules: [
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
        test: /\.ts(x?)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ca]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]_[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
              },
              sourceMap: true,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        // asset
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        // asset
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    pathinfo: false,
    publicPath: '/',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
};
