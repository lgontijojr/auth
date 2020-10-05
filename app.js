const express = require("express");
const firebase = require("firebase");
const bodyParser = require("body-parser");

firebase.initializeApp(firebaseConfig);

const app = express();
const port = process.env.PORT || "8000";
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/auth/signup", (req, res) => {
  const { email, password } = req.query;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      res.send(result);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get("/auth/signin", (req, res) => {
  const { email, password } = req.query;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log(result);
      res.send({ okay: true });
    })
    .catch(function (error) {
      console.log(error);
      res.send({ okay: false });
    });
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
