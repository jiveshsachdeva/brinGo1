var express = require('express');
var router = express.Router();

/* GET chitkara listing. */
router.get('/', function(req, res, next) {
  res.send('chitkara');
});

module.exports = router;
