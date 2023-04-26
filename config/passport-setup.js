const passport = require("passport");
const path = require("path");
const User = require("../models/userModels")
// making strategy
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config({path:path.resolve(__dirname, "../.env")})

passport.use(
  // similar to using middleware that takes 2 parama(one is strategy configuration and another cb)
  new GoogleStrategy(
    {
      // google config
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    },
    (accessToken, refreshToken,profile,done) => {
      //cb function
      new User({
        username: profile.displayName,
        googleId: profile.id,
      }).save().then((userName)=>{
        console.log('user '+userName+' is connected to mongo db.')
      })
    }
  )
);
