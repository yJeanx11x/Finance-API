const express=require('express');
const appRoutes=express.Router();

const authController=require('../controllers/authController')

appRoutes.post('/register', authController.register)

module.exports=appRoutes