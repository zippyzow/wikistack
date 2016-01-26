/**
 * Created by haileykeen on 1/25/16.
 */
var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var wikiRouter = require('./routes/wiki');

var app = express();

var server = app.listen(3000);

morgan.token('id', function getId(req) {
  return req.id
});

app.use(morgan(':id :method :url :response-time'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//app.get('/',function(req, res, next) {
//  res.render('index');
//});

// point res.render to the proper directory
app.set('views', __dirname + '/views');
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files
// have it use swig to do so
app.engine('html', swig.renderFile);
// turn of swig's caching
swig.setDefaults({cache: false});

app.use('/wiki', wikiRouter);