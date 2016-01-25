/**
 * Created by haileykeen on 1/25/16.
 */
var express = require('express');
var app = express();
var swig = require('swig');
var morgan = require('morgan');

morgan.token('id', function getId(req) {
  return req.id
});

app.use(morgan(':id :method :url :response-time'));

