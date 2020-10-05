const express = require("express");
const firebase = require("firebase");
const bodyParser = require("body-parser");

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
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
