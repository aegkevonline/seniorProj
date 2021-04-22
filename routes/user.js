const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.reLogin);

router.get('/login', userController.getLogin);

router.post('/auth', userController.postAuth);

router.get('/home', userController.getHomePage);

router.get('/panel1', userController.getPanel1);

router.get('/logout', userController.getLogout);

module.exports = router;