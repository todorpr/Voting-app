'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  title: String,
  answerOptions: Array,
  active: Boolean
});

module.exports = mongoose.model('Poll', PollSchema);