var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/frontpage', function(req, res, next) {
//  res.send('respond with a resource');

  res.render('frontpage.html');
  
});

module.exports = router;
