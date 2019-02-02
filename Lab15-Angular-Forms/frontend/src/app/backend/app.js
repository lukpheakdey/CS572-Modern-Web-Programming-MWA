var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var gradesRouter = require('./routes/users');
const cors = require('cors');
const mongoose = require("mongoose");

var app = express();
//xyc361VlFLoUPnw3
mongoose
  .connect(
    //"mongodb://127.0.0.1:27017"
    "mongodb+srv://lukpheakdey:xyc361VlFLoUPnw3@cluster0-aoa33.mongodb.net/test?retryWrites=true"
    //"mongodb+srv://pheakdey:nlmgnpwKqQDCZ1So@cluster0-aoa33.mongodb.net/node-angular?retryWrites=true"
    //"mongodb+srv://pheakdey:"+process.env.MONGO_ATLAS_PW+"@cluster0-aoa33.mongodb.net/node-angular"
  )
  .then(() => {
    console.log(process.env.MONGO_ATLAS_PW);
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log(process.env.MONGO_ATLAS_PW);
    console.log("Connection failed!");
  });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', gradesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({errors: [err]});
});

app.listen(3600);
module.exports = app;
