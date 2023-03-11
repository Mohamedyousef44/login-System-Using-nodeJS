
const jwt = require('jsonwebtoken')

let getSignupPage = (req , res)=>{

    res.render('signup.ejs');

}

let createUserToken = async(req , res)=>{

    let data = req.user; 
    let accesstoken = jwt.sign(data , process.env.PRIVATE_KEY)
    await res.json({accesstoken : accesstoken })
    res.json(data) ;

}

module.exports = {
    getSignupPage,
    createUserToken
}
