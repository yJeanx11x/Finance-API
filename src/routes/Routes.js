const express = require('express');
const appRoutes = express.Router();

const authController = require('../controllers/authController')
const transactionController=require('../controllers/transactionController')

const jwt = require('../middlewares/jwt')

appRoutes.post('/register', authController.register)

appRoutes.post('/login', authController.login)

appRoutes.get('/transactions',jwt.verificarToken,transactionController.transactions)

appRoutes.post('/newTransaction',jwt.verificarToken,transactionController.newTransaction)

module.exports = appRoutes