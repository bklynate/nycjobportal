const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main: ['@babel/register', './client/index.js'],
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss'],
  },
  devServer: {
    contentBase: 'dist',
    overlay: true,
    stats: {
      colors: true,
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new LoadablePlugin({
      filename: 'loadable.json',
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
