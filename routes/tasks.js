'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tasks', { title: 'No Try - Only Do' });
});

module.exports = router;
