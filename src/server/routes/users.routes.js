const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');
const secret = require('../app').secret;
const { createUser, getUser, updateStudyPlan } = require('../data/users.data');

const router = express.Router();

const checkMatchFound = (result, res) =>
  !result.result.n || result.result.n < 1
    ? res.status(500).json('Could not find a matching object')
    : res.json(x);

const processUser = ({userName, password}) =>
  getUser(userName)
    .then((users) =>
      !users.length
        ? ({
            _id: uuid(),
            userName: userName,
            hashedPassword: bcrypt.hashSync(password),
            studyPlan: {}
          })
      : Promise.reject("Username is already taken."))
    .catch((err) => Promise.reject(err));

router.post('/new', (req, res) => {
  processUser(req.body)
    .then((user) => createUser(user)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json({e})))
    .catch((err) => res.status(500).json({err}))
});

router.post('/:username/updateStudyPlan', (req, res) => {
  const userName = req.params.username;
  jwt.verify(req.signedCookies.token, secret, (err, decoded) =>
    (err || !decoded || decoded.userName !== userName)
      ? res.status(500).json("Not Authorized")
      : updateStudyPlan(userName, req.body)
          .then((result) => checkMatchFound(result, res))
          .catch((err) => res.status(500).json({err}))
  );
});

module.exports = router;
