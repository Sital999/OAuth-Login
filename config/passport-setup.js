const passport = require("passport");
const path = require("path");
const User = require("../models/userModels");
// making strategy
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

// serializing User
passport.serializeUser((user,done)=>{
    done(null,user.id);
})

// deserialize user
passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
      done(null,user)
    })
})

passport.use(
  // similar to using middleware that takes 2 parama(one is strategy configuration and another cb)
  new GoogleStrategy(
    {
      // google config
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null,currentUser)
          console.log("User already exits");
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
              console.log("user " + newUser + " is connected to mongo db.");
            });
        }
      });
    }
  )
);
