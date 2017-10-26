const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ApiRoutes = require('./routes');
const webpackBuild = require('./webpackBuild');

const app = express();
const ENV = process.env.NODE_ENV || 'development';
const url = 'http://localhost:3000';
const port = 3000;
const dist = path.resolve(__dirname, '../../dist/');
exports.secret = 'This is my super secure secret string';

app.use(bodyParser.json());
app.use(cookieParser(this.secret))

ApiRoutes(app);

if (ENV === 'development') {
  webpackBuild(app);
} else {
  app.use(express.static(dist));
  app.get('/*', (req, res) =>
    res.sendFile(dist + '/index.html')
  );
}

app.listen(port, () =>
  console.log('Listening on ' + url)
);
