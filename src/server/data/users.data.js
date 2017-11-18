const { usersCollection } = require('./mongo.collection');

exports.createUser = (user) =>
  usersCollection()
    .then((x) => x.insertOne(user))
    .catch((err) => Promise.reject(err));

exports.getUser = (userName) =>
  usersCollection()
    .then((x) => x.find({userName}).toArray())
    .catch((err) => Promise.reject(e))

exports.updateStudyPlan = (userName, studyPlan) =>
  usersCollection()
    .then((x) => x.updateOne({userName}, {$set: { studyPlan }}))
    .catch((err) => Promise.reject(err));
