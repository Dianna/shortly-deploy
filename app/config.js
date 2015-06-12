
// ===========================
// MONGO
// ===========================

var mongoose = require('mongoose');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
mongoose.connect('mongodb://MongoLab-7:JN2AWyc1O5B9i_nm0jjlBqO3eAJ1qJ97EljTLJwefIM-@ds036638.mongolab.com:36638/MongoLab-7')
// mongoose.connect('mongodb://localhost/db');

var db = mongoose.connection;

db.on('error', function(err){
  console.log('connection error: ',err);
});

db.on('open', function(){
  console.log('connected');
});

module.exports = db;
