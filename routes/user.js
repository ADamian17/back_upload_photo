const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')


// User Routes
router.get('/', ctrl.user.index);
router.post('/newuser', ctrl.user.createUser);
router.get('/:id', ctrl.user.profile);





module.exports = router;