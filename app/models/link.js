var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var urlSchema = new Schema({
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: {type: Date, default: Date.now}
});

urlSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url)
  this.code = shasum.digest('hex').slice(0,5);
  next();
});

var Link = mongoose.model('Link', urlSchema);

module.exports = Link;
