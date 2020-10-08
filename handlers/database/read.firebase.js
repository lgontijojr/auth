require("../firebase/firebase.init");
const firebaseInit = require("../firebase/firebase.init");

async function handleDatabase({ uid }) {
  const userData = [];

  await firebaseInit.admin
    .ref(`users/${uid}/profile`)
    .once("value", async (snapshot) => {
      return userData.push(snapshot.val());
    });

  return userData;
}

module.exports.handleDatabase = handleDatabase;
