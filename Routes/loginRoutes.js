
const express = require('express');
const router=  express.Router();
const {getLoginPage , getMyPage} = require('../controllers/loginController')

router.get('/' , getLoginPage)

router.post('/check' , getMyPage)

module.exports = router;

