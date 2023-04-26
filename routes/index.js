const router = require("express").Router();
const passport = require("passport")

// logout
router.get("/logout", (req, res) => {
  res.send('Loggind Out')
})

// login
router.get("/login", (req, res) => {
  res.render("login");
});

// setting up for google OAuth login
router.get("/google", passport.authenticate('google',{
  scope:['profile']
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
  res.send('You are now redirected')
})



module.exports = router;
