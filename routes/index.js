const router = require("express").Router();

// logout
router.get("/logout", (req, res) => {
  res.send('Loggind Out')
})

// login
router.get("/login", (req, res) => {
  res.render("login");
});

// setting up for google OAuth login
router.get("/google", (req, res) => {
  res.send('Google OAuth login')
})

module.exports = router;
