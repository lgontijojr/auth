require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignIn({ email, password }) {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

module.exports.handleSignIn = handleSignIn;
