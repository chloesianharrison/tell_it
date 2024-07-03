const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, min: 4},
  password: {type: String, required: true},
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
