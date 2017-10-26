const express = require('express');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/webpack.dev');
const compiler = webpack(webpackConfig);

module.exports = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    stats: {
      colors: true
    },
    watchOptions: {
      ignored: /node_modules/
    },
    publicPath: '/'
  }));

  app.use(webpackHotMiddleware(compiler, {
    reload: true
  }));

  app.use('/*', (req, res, next) => {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
}
