import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default {
	getUserName(context) {
		const user = firebase.auth().currentUser.displayName;
		context.commit('setUserName', user);
	},

	getPostData(context) {
		firebase
			.firestore()
			.collection('userPosts')
			.get()
			.then((result) => {
				const data = result.docs.map((doc) => {
					return doc.data();
				});
				context.commit('setProfilePosts', data);
			});
	},
};
