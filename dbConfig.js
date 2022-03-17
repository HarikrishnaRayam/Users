const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl =
  "mongodb+srv://harirayam:hari.rayam@harimongo.qvp2n.mongodb.net/test";

module.exports = { dbUrl, mongodb, MongoClient };
