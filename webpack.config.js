const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Hello --- ', path.join(__dirname, 'src/index.js'));

module.exports = {
  context: __dirname,
  entry: {
    main: [path.join(__dirname, 'src/index.js')],
  },
  output: {
    path: path.join(__dirname, 'src/dist/'),
    filename: 'bundle.js',
    publicPath: './src/dist/',
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true, // better error outputs
    chunks: true,
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
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    /* 
      PublicPath lets webpack know where you anticipate your bundle to be served from
      this is to be the path on the server.
    */
    hot: true,
    publicPath: './src/dist/',
    historyApiFallback: true, // allows BrowserRouter to work
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/public/', 'index.html'),
      filename: 'index.html',
      xhtml: true,
      inject: true,
    }),
    new webpack.ProgressPlugin(),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
  },
};
