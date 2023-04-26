const mongoose= require('mongoose')

const Schema= mongoose.Schema;

const userSchema= mongoose.Schema({
    username:String,
    googleId:String,
})

// create model

const User= mongoose.Model('user',userSchema)

module.exports=User