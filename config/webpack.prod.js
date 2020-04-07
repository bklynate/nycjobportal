const path = require('path');
const webpack = require('webpack');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  entry: {
    vendor: ['preact', 'react', 'react-dom'],
    main: ['./client/index.js'],
  },
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  devtool: 'cheap-module-source-map',
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
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new LoadablePlugin({
      filename: 'loadable.json',
      writeToDisk: {
        filename: path.resolve(__dirname, '../dist'),
      },
    }),
    new webpack.ProgressPlugin(),
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: {
      name: 'bootstrap',
    },
    splitChunks: {
      chunks: 'all', // <-- The key to this
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'all',
          minChunks: Infinity,
        },
      },
    },
  },
};

module.exports = config;
