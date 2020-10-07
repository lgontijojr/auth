require("../firebase/firebase.init");
const database = require("../firebase/firebase.init");

async function handleDatabaseRead({ uid }) {
  const userData = [];
  console.log("UID", uid);
  await database.admin
    .ref(`users/${uid}/profile`)
    .once("value", async (snapshot) => {
      return userData.push(snapshot.val());
    });

  return userData;
}

module.exports.handleDatabaseRead = handleDatabaseRead;
