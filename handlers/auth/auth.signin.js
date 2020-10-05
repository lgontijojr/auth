require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignIn({ email, password }) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      res.send({ okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
}

module.exports.handleSignIn = handleSignIn;
