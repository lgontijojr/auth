require("../firebase/firebase.init");
const firebaseInit = require("../firebase/firebase.init");

async function handleDatabase({ uid, data }) {
  const formattedDate = JSON.parse(data);

  return await database.admin
    .ref(`/users/${uid}`)
    .set({ profile: formattedDate });
}

async function handleStorage() {
  const uploadFile = firebaseInit.admin.storage().bucket();

  console.log(uploadFile);
  return uploadFile;
}

module.exports.handleDatabase = handleDatabase;
module.exports.handleStorage = handleStorage;
