const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';

let client = undefined;
const initDb = async () => {
  if (client) {
    console.log('connection already established!');
    return true;
  }
  try {
    client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return true;
  } catch (error) {
    return false;
  }
};

const getDb = () => {
  if (!client) {
    console.log('connection to database is still not established!');
    return new Error('connection error!');
  }
  return client;
};

module.exports = {
  initDb,
  getDb,
};
