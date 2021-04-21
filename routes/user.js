const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.reHomePage);

router.get('/home', userController.getHomePage);

router.get('/panel1', userController.getPanel1);

module.exports = router;