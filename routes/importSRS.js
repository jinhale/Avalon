var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('importSRS', { title: 'Import and Upgrade' });
});

module.exports = router;
