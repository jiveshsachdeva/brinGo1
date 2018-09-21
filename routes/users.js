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

  router.get('/table', function(req, res, next) {
    //  res.send('respond with a resource');
    
      res.render('table.html');
      
    });
    router.get('/user', function(req, res, next) {
      //  res.send('respond with a resource');
      
        res.render('user.html');
        
      });
      router.get('/usertype', function(req, res, next) {
        //  res.send('respond with a resource');
        
          res.render('usertype.html');
          
        });
module.exports = router;
