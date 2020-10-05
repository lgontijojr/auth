require("../firebase/firebase.init");
const firebase = require("firebase");

async function handleSignUp({ email, password }) {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
}

module.exports.handleSignUp = handleSignUp;
