const mongoose=require('mongoose')
const path=require('path')
require('dotenv').config({path:path.resolve(__dirname+'../.env')})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to Mongoose Database :)')
})

module.exports=mongoose