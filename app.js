var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');  //eslint-disable-line no-unused-vars
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./src/routes/index');
var users = require('./src/routes/users');
var dashboard = require('./src/routes/dashboard');

// var scripts = require('./dist/scripts.min.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

//uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/dashboard', dashboard);

// app.use('/', scripts);
// app.use('/users', scripts);
// app.use('/dashboard', scripts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) { //eslint-disable-line no-unused-vars
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  debugger;   
  res.render('error');
});


module.exports = app;