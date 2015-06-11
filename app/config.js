
// ===========================
// MONGO
// ===========================

var mongoose = require('mongoose');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
// mongoose.connect('mongodb:your_database_user:password@127.0.0.1/db')
mongoose.connect('mongodb://localhost/xdb');

var db = mongoose.connection;

db.on('error', function(err){
  console.log('connection error: ',err);
});

db.on('open', function(){
  console.log('connected');
});

module.exports = db;
