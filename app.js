const express = require("express");

const passport = require("passport")

// creating express application using express(top level function)
const app = express();

// importing passport for connecting with google
const passportSetup = require("./config/passport-setup");

// connection with mongoose
const mongoose = require("./config/mongo-setup");

// setup cookie
const cookieSession = require("cookie-session");

// importing all environment variables
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: process.env.COOKIE_KEY,
  })
);

// initialize the passport
app.use(passport.initialize())
// initialize the cookie_session and makes cookie for browser
app.use(passport.session());

// setting view engine with ejs
app.set("view engine", "ejs");

// redirecting to routes folder
app.use("/auth", require("./routes"));

// login
app.get("/", (req, res) => {
  res.render("Home");
});

// listening on port 8000
app.listen(port, () => {
  console.log(`app is listening on port :${port}`);
});
