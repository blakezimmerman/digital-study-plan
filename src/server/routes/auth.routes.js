const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const secret = require('../app').secret;
const { getUser } = require('../data/users.data');

const router = express.Router();

const findUser = (userName) =>
  getUser(userName)
    .then((users) => users.length ? users[0] : false)
    .catch((err) => false);

const checkPassword = (hash, password) =>
  bcrypt.compareSync(password, hash);

const generateToken = (resUser) =>
  jwt.sign({ userName: resUser.userName, studyPlan: resUser.studyPlan }, secret);

router.post('/login', (req, res) => {
  findUser(req.body.userName)
    .then((user) => {
      if (user) {
        if (checkPassword(user.hashedPassword, req.body.password)) {
          const resUser = { userName: user.userName, studyPlan: user.studyPlan };
          res.cookie('token', generateToken(resUser), { httpOnly: true, signed: true });
          res.json(resUser);
        } else {
          res.status(500).json('Incorrect password entered');
        }
      } else {
        res.status(500).json('Username not found');
      }
    })
    .catch((err) => res.status(500).json('An error occurred during user lookup'));
});

router.get('/logout', (req, res) => {
  res.cookie('token', '', { httpOnly: true, signed: true, maxAge: 0 });
  res.redirect('/');
});

router.get('/passivelogin', (req, res) =>
  jwt.verify(req.signedCookies.token, secret, (err, decoded) =>
    (err || !decoded)
      ? res.json('Not Authorized')
      : res.json({ userName: decoded.userName, studyPlan: decoded.studyPlan })
  )
);

module.exports = router;
