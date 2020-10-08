require("../firebase/firebase.init");

async function handleDatabase({ uid, data }) {
  const formattedDate = JSON.parse(data);

  return await database.admin
    .ref(`/users/${uid}`)
    .set({ profile: formattedDate });
}

module.exports.handleDatabase = handleDatabase;
