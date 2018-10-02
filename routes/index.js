var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/bringo', function(req, res,next) {
  res.render('bringo', { title: 'Express' });
next();
});

router.get('/bringo/userprofile', function(req, res,next) {
 
  res.render('user', { title: 'Express' });

next();
});

router.get('/bringo/user', function(req, res,next) {
 
  res.render('usertype', { title: 'Express' });

next();
});
router.get('/bringo/libraryrecord', function(req, res,next) {
 
  res.render('record', { title: 'Express' });

next();
});
router.get('/bringo/login', function(req, res,next) {
 
  res.render('login', { title: 'Express' });

next();
});
router.get('/bringo/forgetpassword', function(req, res,next) {
 
  res.render('forget', { title: 'Express' });

next();
});
//user parts


router.get('/bringo/user/admin', function(req, res,next) {
 
  res.render('admin', { title: 'Express' });

next();
});

router.get('/bringo/user/teacher', function(req, res,next) {
 
  res.render('teacher', { title: 'Express' });

next();
});
router.get('/bringo/user/student', function(req, res,next) {
 
  res.render('student', { title: 'Express' });

next();
});
router.get('/bringo/user/library', function(req, res,next) {
 
  res.render('library_staff', { title: 'Express' });

next();
});
router.get('/bringo/user/alumnistudent', function(req, res,next) {
 
  res.render('alumni', { title: 'Express' });

next();
});
//issue & feedback
router.get('/bringo/user/student/feedback', function(req, res,next) {
 
  res.render('formpage', { title: 'Express' });

next();
});
router.get('/bringo/user/student/issuebook', function(req, res,next) {
 
  res.render('frontpage', { title: 'Express' });

next();
});
router.get('/bringo/user/teacher/feedback', function(req, res,next) {
 
  res.render('formpage', { title: 'Express' });

next();
});
router.get('/bringo/user/teacher/issuebook', function(req, res,next) {
 
  res.render('frontpage', { title: 'Express' });

next();
});
router.get('/bringo/user/teacher/uploadnotes', function(req, res,next) {
 
  res.render('upload', { title: 'Express' });

next();
});
router.get('/bringo/user/student/uploadnotes', function(req, res,next) {
 
  res.render('upload', { title: 'Express' });

next();
});

router.get('/bringo/user/student/downloadnotes', function(req, res,next) {
 
  res.render('upload', { title: 'Express' });

next();
});

router.get('/bringo/user/student/bookstatus', function(req, res,next) {
 
  res.render('user', { title: 'Express' });

next();
});
router.get('/bringo/user/teacher/bookstatus', function(req, res,next) {
 
  res.render('user', { title: 'Express' });

next();
});
module.exports = router;
