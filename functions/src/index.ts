import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// export const onCreateUser = functions.auth.user()
// 	.onCreate(user =>
// 		admin.firestore()
// 			.collection('/campaigns')
// 			.doc(user.uid)
// 			.set({id: user.uid, name: user.uid, user: user.uid}));
