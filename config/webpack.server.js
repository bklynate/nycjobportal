const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

// -------------------------------------------
// - Uncomment to run production build locally
// -------------------------------------------
// const Dotenv = require('dotenv-webpack');
// -------------------------------------------

const config = {
  entry: {
    server: ['./server/index.js'],
  },
  mode: 'production',
  target: 'node',
  externals: nodeExternals(),
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
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
          MiniCssExtractPlugin.loader,
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
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin(),
    // -------------------------------------------
    // - Uncomment to run production build locally
    // -------------------------------------------
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
    // new Dotenv(),
    // -------------------------------------------
    new webpack.ProgressPlugin(),
  ],
};

module.exports = config;
