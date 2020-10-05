require("../firebase/firebase.init");
const firebase = require("firebase");

async function handleSignOut({ email, password }) {
  return await firebase.auth().signOut();
}

module.exports.handleSignOut = handleSignOut;
