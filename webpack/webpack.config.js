const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pathConfig = require('./pathConfig');

module.exports = {
  devtool: 'source-map',
  entry: [
  'react-hot-loader/patch',
  'webpack-hot-middleware/client?http://localhost:3000/',
  `${pathConfig.src}/index.js`,
],

  output: {
    path: pathConfig.dist,
    publicPath: pathConfig.public,
    filename: '[name].js',
  },

  resolve: {
    alias: {
      src: pathConfig.src,
    },
    modules: [
      `${pathConfig.src}/components`,
      `${pathConfig.base}/node_modules`,
    ],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              configFile: `${pathConfig.webpack}/.eslintrc`,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moodules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              extends: `${pathConfig.webpack}/.babelrc`,
            },
          },
        ],
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader'
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: `${pathConfig.src}/index.html`,
    }),
  ],
};
