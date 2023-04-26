const mongoose= require('mongoose')

const Schema= mongoose.Schema;

const userSchema= mongoose.Schema({
    username:String,
    googleId:String,
})

// create model
const User= mongoose.model('user',userSchema)

module.exports=User