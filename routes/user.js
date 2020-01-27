const express = require('express');
const router = express.Router();
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
router.post('/createuser', upload.single('profileImage'), ctrl.user.createUser);
router.get('/:id', ctrl.user.profile);


module.exports = router;