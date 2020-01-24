const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = require('../models');

// Multer Set up
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb( null, './public/' )
},
filename: function (req, file, cb) {
  cb( null, Date.now() + '-' + file.originalname )
}
})

const upload = multer({ storage: storage })
// Controllers
const ctrl = require('../controllers')


// User Routes
router.get('/', ctrl.user.index);
// router.post('/createuser', ctrl.user.createUser);
router.get('/:id', ctrl.user.profile);

router.post('/uploadphoto', upload.single('profileImage'), ( req, res ) => {
  const uploadPhoto = new db.User ({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profileImage: req.file.path
  })
  uploadPhoto
  .save()
  .then( res => console.log(res))
  .catch(err => console.log(err))
  res.status(200).json({
    status: 200,
    message: "susses"
  });
});

// router.post('/upload',function(req, res) {
//   upload(req, res, function (err) {
//          if (err instanceof multer.MulterError) {
//              return res.status(500).json(err)
//          } else if (err) {
//              return res.status(500).json(err)
//          }
//     return res.status(200).send(req.file)
//   })
// });


module.exports = router;