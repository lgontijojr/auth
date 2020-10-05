require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignUp({ email, password }) {
  firebase.auth().createUserWithEmailAndPassword(email, password);
}

module.exports.handleSignUp = handleSignUp;
