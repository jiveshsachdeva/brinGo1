const mongoose = require('mongoose');

const bringoUserSchema = new mongoose.Schema({
  usertype: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
 
});

mongoose.model('user', bringoUserSchema);