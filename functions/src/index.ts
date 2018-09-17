import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp()
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

/*export const onUserUpdate =
  functions.firestore.document('users/ikxJnCKQ9eDzyInnQSlg').onUpdate(change => {
    const after = change.after.data()
  })*/

export const getUsers = functions.https.onRequest((request, response) => {
  admin.firestore().doc('users/ikxJnCKQ9eDzyInnQSlg')
    .get()
    .then(doc => {
      const users = doc.data()
      response.send(users)
    })
    .catch(error => {
      // Handle the error
      console.log(error)
      response.status(500).send(error)
    })
});
