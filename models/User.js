const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;