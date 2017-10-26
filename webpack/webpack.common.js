const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

exports.SRC = path.resolve(__dirname, '../src');
exports.APP_DIR = path.resolve(__dirname, '../src/client');
exports.BUILD_DIR = path.resolve(__dirname, '../dist');

exports.commonConfig = {
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    loaders : [
      {
        test: /\.js$/,
        include : this.SRC,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'babel-preset-react'],
              plugins: ['react-hot-loader/babel', 'transform-class-properties']
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:  this.APP_DIR + '/index.html'
    })
  ]
};
