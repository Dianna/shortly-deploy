var db = require('../config');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: {type: Date, default: Date.now}
});

var Link = mongoose.model('Link', urlSchema);

module.exports = urlSchema;
module.exports = Link;
