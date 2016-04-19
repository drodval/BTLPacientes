var express = require('express');
var routes  = require('./routes/index.js');
var cv      = require('./lib/opencv');
//var face_detection = require('./examples/face-detection.js')

var app = express();

app.use(express.static(__dirname + '//public'));
app.set('views', __dirname + '//public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});