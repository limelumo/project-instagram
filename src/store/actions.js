import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default {
	GET_USERNAME(context) {
		const user = firebase.auth().currentUser.displayName;
		context.commit('SET_USERNAME', user);
	},

	GET_POSTDATA(context) {
		firebase
			.firestore()
			.collection('userPosts')
			.orderBy('date', 'desc')
			.get()
			.then((result) => {
				const data = result.docs.map((doc) => {
					return doc.data();
				});
				console.log(data);
				context.commit('SET_PROFILEPOSTS', data);
			});
	},
};
