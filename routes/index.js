var express = require('express');
var router = express.Router();
var ct = require('./controller/main');

var su = require('../app_server/models/user');

router.get('/bringo',ct.bringo); 
router.post('/bringo/signup',su.s1);

router.get('/bringo/userprofile',ct.user);
 
router.get('/bringo/user',ct.usertype);
router.get('/bringo/libraryrecord',ct.record);
router.get('/bringo/login',ct.login);
router.get('/bringo/signup',ct.signup);
router.get('/bringo/forgetpassword',ct.forget); 
//user parts


router.get('/bringo/user/admin',ct.admin);

router.get('/bringo/user/teacher',ct.teacher);
router.get('/bringo/user/student',ct.student);
router.get('/bringo/user/library',ct.library_staff);
router.get('/bringo/user/alumnistudent',ct.alumni);
//issue & feedback
router.get('/bringo/user/student/feedback',ct.formpage);

router.get('/bringo/user/student/issuebook',ct.frontpage);
router.get('/bringo/user/teacher/feedback',ct.formpage1);
router.get('/bringo/user/teacher/issuebook',ct.frontpage1);
router.get('/bringo/user/teacher/uploadnotes',ct.upload1);
router.get('/bringo/user/student/uploadnotes',ct.upload);
router.get('/bringo/user/student/downloadnotes',ct.upload);
router.get('/bringo/user/student/bookstatus',ct.user);
router.get('/bringo/user/teacher/bookstatus',ct.userTeacher);

module.exports = router;
