const express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.js');
});
app.listen('5000');
module.exports = app;
