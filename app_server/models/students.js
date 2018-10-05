const mongoose = require('mongoose');

const labTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

const subscriptionSchema = new mongoose.Schema({
  facility: String,
  membersince: {
    type: Number,
    required: true
  },
  comments: String,
  timestamp: {
    type: Date,
    'default': Date.now
  }
});

const cuStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  course : String,
  subjects: [String],
  Labtimes: [labTimeSchema],
  subscriptions: [subscriptionSchema]
});

mongoose.model('student', cuStudentSchema);