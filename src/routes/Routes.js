const express = require('express');
const appRoutes = express.Router();

const authController = require('../controllers/authController')

const jwt = require('../middlewares/jwt')

appRoutes.post('/register', authController.register)
appRoutes.post('/login', authController.login)

module.exports = appRoutes