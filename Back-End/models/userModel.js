const mongoose = require('mongoose');


const newUserSchema = new mongoose.Schema({
    FullName: { type: String, required: true },
    UserName: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },

}, { timestamps: true, strict: true })


module.exports = mongoose.model('UserRegister', newUserSchema);
