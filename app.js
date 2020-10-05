const express = require("express");
const auth = require("./handlers/auth/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || "8000";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/auth/signup", (req, res) => {
  const { email, password } = req.query;
  auth.signUp.handleSignUp({ email, password });
});

app.get("/auth/signin", (req, res) => {
  const { email, password } = req.query;
  auth.signIn.handleSignIn({ email, password });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
