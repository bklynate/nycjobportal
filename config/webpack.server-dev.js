const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const Dotenv = require('dotenv-webpack');

const config = {
  entry: {
    server: ['./server/index.js'],
  },
  mode: 'development',
  target: 'node',
  externals: nodeExternals(),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server-bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
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
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
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
    new Dotenv(),
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
