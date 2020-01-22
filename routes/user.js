const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')


// User Routes
router.get('/', ctrl.user.index);
router.post('/newuser', ctrl.user.createUser);





module.exports = router;