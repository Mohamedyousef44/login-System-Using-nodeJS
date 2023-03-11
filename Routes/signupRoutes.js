
const express = require('express');
const router=  express.Router();
const {getSignupPage , createUserToken} = require('../controllers/signupController')
const createUser = require('../middlewares/createUser')

router.get('/' , getSignupPage)

router.post('/create' , createUser , createUserToken)

module.exports = router;