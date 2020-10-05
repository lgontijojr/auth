require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignUp({ email, password }) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      res.send({ okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
}

module.exports.handleSignUp = handleSignUp;
