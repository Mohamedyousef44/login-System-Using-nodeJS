const mongoose = require("mongoose");
var DB_URL = "mongodb://localhost:27017/Users";

mongoose.connect(DB_URL,{useNewUrlParser:true});

let usersSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String , required:true}
})
 
module.exports = mongoose.model("UserData", usersSchema);
