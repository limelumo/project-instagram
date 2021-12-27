import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const story = {
	namespaced: true,
	state: {
		isStoryModalOpen: false,
		storyPosts: [],
		storyNum: '',
	},

	mutations: {
		CONTROL_STORYMODAL(state, payload) {
			state.isStoryModalOpen = payload;
		},
		SET_STORYPOSTS(state, payload) {
			state.storyPosts = payload;
		},
		SET_STORYNUM(state, payload) {
			state.storyNum = payload;
		},
	},

	actions: {
		GET_STORYDATA({ commit }) {
			firebase
				.firestore()
				.collection('friendsStories')
				.get()
				.then((result) => {
					const data = result.docs.map((doc) => {
						return doc.data();
					});
					commit('SET_STORYPOSTS', data);
				});
		},
	},
};

export default story;
