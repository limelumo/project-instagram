import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const sidebar = {
	namespaced: true,
	state: {
		userSuggestions: [],
	},

	mutations: {
		SET_USERSUGGESTIONS(state, payload) {
			state.userSuggestions = payload;
		},
	},

	actions: {
		GET_SUGGESTIONDATA({ commit }) {
			firebase
				.firestore()
				.collection('userSuggestions')
				.get()
				.then((result) => {
					const data = result.docs.map((doc) => {
						return doc.data();
					});
					commit('SET_USERSUGGESTIONS', data);
				});
		},
	},
};
export default sidebar;
