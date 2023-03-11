
const user = require('../models/usersModel')
const bcrypt = require('bcrypt');
const checkAdmin = require('../utils/checkAdmin');

let newUser = async(req , res , next)=>{

    let data = req.body; 
    let emailCheck = await user.findOne({email : req.body.email })

        if(emailCheck == null){

            let hashPass = await bcrypt.hash(data.password , 10)
            data.password = hashPass;

            if(checkAdmin(data.email) == null) data.role = "basic" ;
            else  data.role = "admin" ;

            let userData = new user(data)
            await userData.save();

            req.user = data;
            next();

        }else{

            res.json("email is exist");
        }
}


module.exports = newUser ;