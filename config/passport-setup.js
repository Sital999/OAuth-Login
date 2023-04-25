const passport = require("passport");
// making strategy
const GoogleStrategy = require("passport-google-oauth20");

// similar to using middleware that takes 2 parama(one is strategy and another cb)
passport.use(
  new GoogleStrategy({
    // google config
    clientID:process.env.clientID,
    clientSecret:process.env.clientSecret
  }),
  () => {
    //cb function
  }
);
