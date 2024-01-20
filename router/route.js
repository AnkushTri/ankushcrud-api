const express=require('express')

const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const loginSchema=require("../validators/login-validator");
const authMiddleware =require("../middlewares/auth-middleware");
const router=express.Router()


// import {home} from '../controllers/auth-controller.js'

const {home,registration,login,user} =require('../controllers/auth-controller')


router.get('/',home)

router.post('/registration', validate(signupSchema) ,registration)

router.post('/login', validate(loginSchema),login)

router.get('/user',authMiddleware, user)


module.exports=router;