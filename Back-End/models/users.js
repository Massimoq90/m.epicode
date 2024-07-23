const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    }
  }, {timestamps: true, strict: true});
  
  const userModel = mongoose.model('User', userSchema);


  module.exports = userModel;