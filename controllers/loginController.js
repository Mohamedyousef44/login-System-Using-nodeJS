
const user = require('../models/usersModel')
const bcrypt = require('bcrypt');

let getLoginPage = (req , res)=>{

    res.render('log.ejs')
}


let getMyPage = async(req , res)=>{

    let data = await user.findOne({email : req.body.email})
    let hash = data.password;
    let password = req.body.password;
    
    if(data == null){

        return res.status("400").send("can not find user")

    }

    try {

        if(await bcrypt.compare(password,hash)){
            res.redirect('/userpage')

        }else{
            res.json('not allowed')
        }

    }catch(e){
        console.log(e)
        res.status(500).send("hi")
    }
}
    
module.exports = {
    getLoginPage,
    getMyPage
}