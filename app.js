const express = require("express");
const auth = require("./handlers/auth/index");
const database = require("./handlers/database/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || "8000";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/auth/signout", (req, res) => {
  return auth.singOut
    .handleSignOut()
    .then((result) => {
      res.send({ okay: result });
    })
    .catch((error) => {
      res.send({ okay: error });
    });
});

app.get("/auth/signup", (req, res) => {
  const { email, password } = req.query;

  return auth.signUp
    .handleSignUp({ email, password })
    .then((result) => {
      res.send({ uid: result.user["uid"], okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
});

app.get("/auth/signin", (req, res) => {
  const { email, password } = req.query;

  return auth.signIn
    .handleSignIn({ email, password })
    .then((result) => {
      res.send({ uid: result.user["uid"], okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
});

app.get("/database/write/database", (req, res) => {
  const { uid, data } = req.query;

  return database.write
    .handleDatabase({ uid, data })
    .then((result) => {
      res.send({ okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
});

app.get("/database/read", (req, res) => {
  const { uid } = req.query;

  return database.read
    .handleDatabase({ uid })
    .then((result) => {
      res.send({ data: result, okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
