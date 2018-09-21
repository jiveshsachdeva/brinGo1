var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('student', { title: 'Express' });
});
router.get('/library', function(req, res, next) {
  res.render('library', { title: 'Express' });
});
router.get('/teacher', function(req, res, next) {
  res.render('teacher', { title: 'Express' });
});



module.exports = router;
