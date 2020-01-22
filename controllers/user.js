const db = require('../models');

// all Users
const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if (err)  return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    
    res.json({
      status: 200,
      count: allUsers.length,
      data: allUsers,
      requestedAt: new Date().toLocaleString(),
    });
  });
};



const createUser = (req, res) => {
  if (
    !req.body.firstName 
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
        message: "Something went wrong. Please try again"
      });

      const newUser = {
        firstName: req.body.firstName,
      };

      db.User.create(newUser, (err) => {
        if(err) console.log(err)
        if (err)
          return res.status(500).json({
            status: 500,
            message: "Something went wrong. Please try again"
          });
        res.status(201).json({ status: 201, message: "success" });
      });
  });
};

module.exports = {
  index,
  createUser,
};