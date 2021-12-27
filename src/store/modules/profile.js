import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const profile = {
	namespaced: true,
	state: {
		followingLists: [],
		clikedPost: false,
		postNum: '',
		isFollowingModalOpen: false,
		isDelModalOpen: false,
	},

	mutations: {
		CONTROL_DELMODAL(state, payload) {
			state.isDelModalOpen = payload;
		},
		CONTROL_FOLLOWINGMODAL(state, payload) {
			state.isFollowingModalOpen = payload;
		},
		SET_CLICKEDPOST(state, payload) {
			state.clikedPost = payload;
		},
		SET_POSTNUM(state, payload) {
			state.postNum = payload;
		},
		SET_FOLLOWINGLISTS(state, payload) {
			state.followingLists = payload;
		},
	},

	actions: {
		GET_FOLLOWINGDATA({ commit }) {
			firebase
				.firestore()
				.collection('following')
				.get()
				.then((result) => {
					const data = result.docs.map((doc) => {
						return doc.data();
					});
					commit('SET_FOLLOWINGLISTS', data);
				});
		},
	},
};

export default profile;
