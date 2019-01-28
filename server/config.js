var mongo = require('mongodb');
var mongoose = require('mongoose');
//database connection
mongoose.connect('mongodb://127.0.0.1:27017/editorDB').then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

var db = mongoose.connection;
module.exports = db;