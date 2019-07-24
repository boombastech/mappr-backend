import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

export const onCreateUser = functions.auth.user()
	.onCreate(user => {
		const doc = admin.firestore().collection('/campaigns').doc();
		doc.set({id: doc.id, name: doc.id, user: user.uid});
	});