var express     = require('express');
var mysql       = require('mysql');
var path        = require('path');
var favicon     = require('serve-favicon');
var logger      = require('morgan');
var bodyParser  = require('body-parser');
var routes      = require('./routes/index.js');
var report      = require('./routes/reports.js');
var PDFDocument = require('pdfkit');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '//public'));
app.set('views', __dirname + '//public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use('/api', routes);
app.use('/reports', report);
//app.use('/detallePaciente/:id', routes);
//app.use('/pacientes', routes);
//app.use('/updatePaciente', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500); 
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
