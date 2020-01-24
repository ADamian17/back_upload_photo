const db = require('../models');

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

  if (
    !req.body.firstName ||
    !req.body.lastName
    // !req.body.profilePhoto
  ) {
    return res.status(400).json({
      status: 400,
      message:
        "Please enter your name"
    });
  }
  db.User.findOne({ name: req.body.name }, (err, foundUser) => {
    if (err) return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again"
      });
      
    if (foundUser) res.status(400).json({
        status: 400,
        message: "Something went wrong. Please try again stops here"
      });

      const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      };
      db.User.create(newUser, (err) => {
        console.log(newUser)
        if (err)
          return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again"
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