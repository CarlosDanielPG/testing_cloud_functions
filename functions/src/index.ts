import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp()
const db = admin.firestore()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

/*export const onUserUpdate =
  functions.firestore.document('users/ikxJnCKQ9eDzyInnQSlg').onUpdate(change => {
    const after = change.after.data()
  })*/

export const getUsers = functions.https.onRequest((request, response) => {
  db.collection("users").get()
    .then(snap => {
      let users = Array();
      snap.forEach(doc => {
        users.push(doc.data())
      })
      response.send(users)
    })
    .catch(error => {
      console.log(error)
      response.status(500).send(error)
    })
});
