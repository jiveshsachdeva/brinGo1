var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/record', function(req, res, next) {
//  res.send('respond with a resource');

  res.render('record.html');
  
});

module.exports = router;
