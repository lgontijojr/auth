require("../firebase/firebase.init");
const firebase = require("firebase");

async function handleSignIn({ email, password }) {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
}

module.exports.handleSignIn = handleSignIn;
