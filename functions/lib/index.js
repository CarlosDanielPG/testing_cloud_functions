"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.getUsers = functions.https.onRequest((request, response) => {
    admin.firestore().doc('users/ikxJnCKQ9eDzyInnQSlg')
        .get()
        .then(doc => {
        const users = doc.data();
        response.send(users);
    })
        .catch(error => {
        // Handle the error
        console.log(error);
        response.status(500).send(error);
    });
});
//# sourceMappingURL=index.js.map