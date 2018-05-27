'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var User = new Schema({  
  username: {
    type: String,
    required: 'Kindly enter the name of User',
    unique : true
  },
  password: {
    type: String,
    required: 'Kindly enter the password of the User'
  },
  email : {
      type : String,
      required : 'Kindly enter the email of the user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('User', User);