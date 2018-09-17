"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
/*export const onUserUpdate =
  functions.firestore.document('users/ikxJnCKQ9eDzyInnQSlg').onUpdate(change => {
    const after = change.after.data()
  })*/
exports.getUsers = functions.https.onRequest((request, response) => {
    db.collection("users").get()
        .then(snap => {
        let users = Array();
        snap.forEach(doc => {
            users.push(doc.data());
        });
        response.send(users);
    })
        .catch(error => {
        console.log(error);
        response.status(500).send(error);
    });
    /*admin.firestore().doc('users/ikxJnCKQ9eDzyInnQSlg')
      .get()
      .then(doc => {
        const users = doc.data()
        response.send(users)
      })
      .catch(error => {
        // Handle the error
        console.log(error)
        response.status(500).send(error)
      })*/
});
//# sourceMappingURL=index.js.map