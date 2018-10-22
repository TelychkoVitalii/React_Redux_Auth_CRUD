const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt');

// Create User Register Schema
const UserRegisterSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});

UserRegisterSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// UserRegisterSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.password);
// };

module.exports = UserRegister = mongoose.model('User Register', UserRegisterSchema);