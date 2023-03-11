
//#region configs

const express = require('express')
const app = new express();
const path = require('path');
const bodyParser = require('body-parser')
const loginRoutes = require('./Routes/loginRoutes')
const signupRoutes = require('./Routes/signupRoutes')
var PORT = process.env.PORT || '3000';
require('dotenv').config();
const authenticateToken = require('./middlewares/authToken')


//#endregion


//#region middlewares

app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "/node_modules/bootstrap/dist/")));
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


//#endregion


//#region routes

app.use('/api/login' , authenticateToken , loginRoutes )
app.use('/api/signup' , signupRoutes )

app.get('/api/userpage' , (req , res)=>{

    res.render('userpage.ejs')
})

app.get('/api/forgetPass' , (req , res)=>{

    res.render('forgetPass.ejs')
})

//#endregion


app.listen(PORT , ()=>{console.log("http://localhost:" + PORT)})

