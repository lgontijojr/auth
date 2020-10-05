require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignOut({ email, password }) {
  firebase.auth().signOut();
}

module.exports.handleSignOut = handleSignOut;
