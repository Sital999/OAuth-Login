const express = require("express");

// creating express application using express(top level function)
const app = express();

// importing all environment variables
require("dotenv").config();

const port = process.env.PORT || 8000;

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