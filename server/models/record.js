const mongoose = require('mongoose');

var RecordSchema = mongoose.Schema({
  path: {
    type: String
  },
  content: {
    type: String
  }
    
});

module.exports = Record = mongoose.model('Record', RecordSchema);