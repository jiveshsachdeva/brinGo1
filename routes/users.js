var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/frontpage', function(req, res, next) {
//  res.send('respond with a resource');

  res.render('frontpage.html');
  
});
router.get('/formpage', function(req, res, next) {
  //  res.send('respond with a resource');
  
    res.render('formpage.html');
    
  });

module.exports = router;
