const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { SRC, APP_DIR, commonConfig } = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    APP_DIR + '/index.js'
  ],

  devtool: 'eval',

  output: {
    filename: 'app.bundle.js'
  },

  module: {
    loaders : [
      {
        test: /\.scss$/,
        include : this.SRC,
        use: ['style-loader', 'css-loader?modules', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
