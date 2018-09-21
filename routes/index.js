var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('template', { title: 'Express' });
});
router.get('/student', function(req, res, next) {
  res.render('student', { title: 'Express' });
});
router.get('/library', function(req, res, next) {
  res.render('library', { title: 'Express' });
});
router.get('/teacher', function(req, res, next) {
  res.render('teacher', { title: 'Express' });
});
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});
router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Express' });
});
router.get('/usertype', function(req, res, next) {
  res.render('usertype', { title: 'Express' });
});

module.exports = router;
