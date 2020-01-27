const db = require('../models');
const mongoose = require('mongoose');


// all Users
const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err)  return res.status(500).json({
      status: 500,
      message: 'Something went wrong! Please try again',
    });
    
    res.json({
      status: 200,
      count: allUsers.length,
      data: allUsers,
      requestedAt: new Date().toLocaleString(),
    });
  });
};


// create user
const createUser = (req, res) => {
  // if (
  //   !req.body.firstName ||
  //   !req.body.lastName ||
  //   !req.body.profilePhoto
  // ) {
  //   return res.status(400).json({
  //     status: 400,
  //     message:
  //       "Please enter your name"
  //   });
  // }
  db.User.findOne({ name: req.body.name }, (err, foundUser) => {
    console.log(`This is foundUser ${foundUser}`)
    if (err) return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again 1"
      });

    if (foundUser) res.status(400).json({
        status: 400,
        message: "Something went wrong. Please try again 2"
      });

      const newUser = new db.User ({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profileImage: req.file.path
      });

      db.User.create(newUser, (err) => {
        console.log(`This is newUser ${newUser}`)
        if (err) return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again 3"
          });
        res.status(201).json({ status: 201, message: "success" });
      });
  });
};

// SHow One User
const profile = (req, res) => {
  db.User.findById( req.params.id, (err, foundUser) => {
    if ( err ) return res.status(500).json({
      status: 500,
      data: foundUser,
      error: [{ message: 'Something went wrong. Please try again '}],
    });
    return res.status(200).json({
      status: 200,
      data: foundUser,
      requestedAt: new Date().toLocaleString(),
    }); 
  });
};

module.exports = {
  index,
  createUser,
  profile,
};