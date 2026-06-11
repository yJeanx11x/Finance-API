const express = require('express');
const appRoutes = express.Router();

const authController = require('../controllers/authController')
const transactionController = require('../controllers/transactionController')

const jwt = require('../middlewares/jwt')
const limiter = require('../middlewares/rateLimit')

appRoutes.use(limiter)


appRoutes.post('/register', authController.register)
appRoutes.post('/login', authController.login)



appRoutes.get('/transaction', jwt.verificarToken, transactionController.transactions)
appRoutes.post('/transaction', jwt.verificarToken, transactionController.newTransaction)
appRoutes.patch('/transaction/:id', jwt.verificarToken, transactionController.editTransaction)
appRoutes.delete('/transaction/:id', jwt.verificarToken, transactionController.deleteTransaction)
appRoutes.post('/transaction/categoria',jwt.verificarToken,transactionController.filterCategory)

module.exports = appRoutes