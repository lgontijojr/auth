require("../firebase/firebase.init");
const database = require("../firebase/firebase.init");

async function handleDatabaseWrite({ uid, data }) {
  const formattedDate = JSON.parse(data);

  await database.admin.ref(`/users/${uid}`).set({ profile: formattedDate });
}

module.exports.handleDatabaseWrite = handleDatabaseWrite;
