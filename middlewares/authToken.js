const jwt = require('jsonwebtoken');

function authenticateToken(req , res , next){

    const header = req.headers['authorization'];
    const token = header ? header.split(' ')[1] : null;

    if(token == null ) return res.sendStatus(401)

    jwt.verify(token , process.env.PRIVATE_KEY , (err , user)=>{
        if(err) return res.sendStatus(401)
        req.user = user;
        next();
    })
}



module.exports = authenticateToken;