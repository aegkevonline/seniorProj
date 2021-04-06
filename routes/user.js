const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.reMainPage);

router.get('/main', userController.getMainPage);

router.get('/gear1', userController.getGear1);

module.exports = router;