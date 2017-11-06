// Imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Define constants
const app = express();
const ENV = process.env.NODE_ENV || 'development';
const url = 'http://localhost:3000';
const port = 3000;
const dist = path.resolve(__dirname, '../../dist/');
exports.secret = 'This is my super secure secret string';

// Initialize app
app.use(bodyParser.json());
app.use(cookieParser(this.secret))

require('./routes')(app);

if (ENV === 'development') {
  require('./webpackBuild')(app);
} else {
  app.use(express.static(dist));
  app.get('/*', (req, res) =>
    res.sendFile(dist + '/index.html')
  );
}

app.listen(port, () =>
  console.log('Listening on ' + url)
);
