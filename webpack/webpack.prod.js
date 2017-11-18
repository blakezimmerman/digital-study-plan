const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { APP_DIR, BUILD_DIR, commonConfig } = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  entry: [
    APP_DIR + '/index.js'
  ],

  output: {
    path: BUILD_DIR,
    filename: 'app.[hash].bundle.js'
  },

  module: {
    loaders : [
      {
        test: /\.scss$/,
        include : this.SRC,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { modules: 1, importLoaders: 1 } },
            { loader: 'sass-loader' }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("app.[hash].bundle.css"),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
