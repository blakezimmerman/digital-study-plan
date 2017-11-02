const connectDb = require('./mongo.connection');

let getCollection = (collection) => {
  let _col;

  return () => {
    if (!_col) {
      _col = connectDb().then(db => {
        return db.collection(collection);
      });
    }
    return _col;
  }
}

if (process.env.CLEAN) {
  ['users'].forEach(collection =>
    connectDb().then(db => db.collection(collection).remove({}))
  );
}

exports.usersCollection = getCollection('users');

