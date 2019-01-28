var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var Record = require('./models/record');
var app = express();
var db = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors());
//cors handling
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  next();

});

var routes = require('./routes/record');
const API_PORT=3001;

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/record', routes);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
