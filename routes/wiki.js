/**
 * Created by haileykeen on 1/26/16.
 */
var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
    res.redirect('/')
  });

  router.post('/', function(req, res, next) {
    var page = new Page({
      title: req.body.title,
      content: req.body.content
    });

    page.save().then(function(data) {
      data.save();
      res.redirect('/');
    }).then(function(err) {
      console.error('err:', err);
    });

  //  page.save(function (err) {
  //    if (err) console.error(err);
  //    else res.redirect('/');
  //  });
  });

    router.get('/add', function (req, res, next) {
      res.render('addpage');
    });

module.exports = router;
