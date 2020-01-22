const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  // profilePhoto: {
  //   type: String,
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;