require("../firebase/firebase.init");
const firebase = require("firebase");

function handleSignOut({ email, password }) {
  firebase
    .auth()
    .signOut()
    .then((result) => {
      res.send({ okay: true });
    })
    .catch((error) => {
      res.send({ okay: false });
    });
}

module.exports.handleSignOut = handleSignOut;
