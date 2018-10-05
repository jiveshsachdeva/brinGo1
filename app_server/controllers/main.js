/* GET home page */
const mongoose=require('mongoose');
const user=mongoose.model('user');
const index = function(req, res){
  res.render('index', { title: 'Routed through Controller main.js' });
};
const createuser =function(req,res)
{
  user.create({
    username:req.body.username,
    usertype:req.body.usertype,
    rollno:req.body.rollno,
    password:req.body.password
  },(err,location)=>{
    if(err){
      res
      .status(400)
      .json(err);
    }
    else{
      
      res
      .status(201)
      .json('user');
    }
  });

};
module.exports = {
  index,createuser
};
